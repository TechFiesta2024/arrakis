import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Images from '../../../public/assets'
import { useAuthState } from '@/context/AuthContext'
import { toast } from 'react-toastify'
import axiosInstance from '@/utils/axiosInstance'
import Cookies from 'js-cookie'
import Preloader from '../Global/Preloader'


export default function TeamComponent() {
  const { setUser, user } = useAuthState();

  const [submitting, setSubmitting] = useState(false)
  const [loading, setLoading] = useState(false)

  const [yourTeam, setYourTeam] = useState({})
  const [leaderEmail, setLeaderEmail] = useState();
  const [teamMembers, setTeamMembers] = useState([])

  const [clipboardCheck, setClipboardCheck] = useState(null);

  const [teamName, setTeamName] = useState('');
  const [joinTeamId, setJoinTeamId] = useState('');

  useEffect(() => {
    const source = axios.CancelToken.source();
    async function getTeamDetails() {
      try {
        setLoading(true)

        const { data } = await axiosInstance.get("/user", {
          headers: {
            email: user.email,
          },
        });

        setUser((user) => ({
          ...user,
          teamId: data.team_id
        }));
        Cookies.set("teamId", data.team_id, { expires: 7 });

        const response = await axiosInstance.get(`/team/${data.team_id || joinTeamId}`)

        if (response.status === 200) {
          setYourTeam(response.data)
          setLeaderEmail(response.data.leader_email)
          setTeamMembers(response.data.college_members.concat(response.data.school_members))
        }
      }
      catch (err) {
        if (axios.isCancel(err)) {
          console.error("Axios error: ", err.message);
        }
        else if (err.response.status === 404 || 400) {
          setYourTeam({})
          setLeaderEmail()
          setTeamMembers([])
        }
      }
      finally {
        setLoading(false)
      }
    }
    getTeamDetails()

    return () => {
      source.cancel("Request Cancelled.");
    }
  }, [user.teamId])


  async function createTeam() {
    if (teamName.trim().length < 4) {
      toast.warning(`Teamname must be at least 4 letters`, {
        style: {
          color: "#010100",
          backgroundColor: "#FFF3B0",
        },
      });
      return
    }

    try {
      setSubmitting(true)
      const response = await axiosInstance.post(`/team/create`,
        {
          type: user.userType,
          name: teamName.trim()
        },
        {
          headers: {
            userid: user.UUID
          }
        }
      );

      if (response.status === 200) {
        setUser((user) => ({
          ...user,
          teamId: response.data.code
        }));

        toast.success(`${response.data.message}`, {
          icon: <Image src={Images.logoVerify} alt="verify_logo" />,
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }
      setTeamName('')
    }
    catch (error) {
      if (error.response.status === 400) {
        toast.warning(`${error.response.data.message}`, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
        return
      }
      toast.warning(`Please logout and login again`, {
        style: {
          color: "#010100",
          backgroundColor: "#FFF3B0",
        },
      });
    }
    finally {
      setSubmitting(false)
    }
  }

  async function joinTeam() {
    if (joinTeamId.trim().length !== 8) {
      toast.success(`Invalid team code please check again`, {
        icon: <Image src={Images.logoVerify} alt="verify_logo" />,
        style: {
          color: "#010100",
          backgroundColor: "#FFF3B0",
        },
      });
      return
    }

    try {
      setSubmitting(true)
      const response = await axiosInstance.post(`/team/join/${joinTeamId.trim()}`,
        undefined,
        {
          headers: {
            userid: user.UUID
          }
        }
      );

      if (response.status === 200) {
        setUser((user) => ({
          ...user,
          teamId: response.data.code
        }));

        toast.success(`${response.data.message}`, {
          icon: <Image src={Images.logoVerify} alt="verify_logo" />,
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }
    } catch (error) {
      if (error.response.status === 400 || 404) {
        toast.warning(`${error.response.data.message}`, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
        return
      }
      toast.warning(`Please logout and login again`, {
        style: {
          color: "#010100",
          backgroundColor: "#FFF3B0",
        },
      });
    }
    finally {
      setJoinTeamId('')
      setSubmitting(false)
    }
  }

  async function deleteTeam() {
    try {
      setSubmitting(true)
      const res = await axiosInstance.post(`/team/delete/${user.teamId}`, undefined, {
        headers: {
          userid: user.UUID
        }
      })
      if (res.status === 200) {
        setUser((user) => ({
          ...user,
          teamId: null
        }));

        const successMessage = typeof res.data === 'string' ? res.data : 'Team deleted successfully';
        toast.success(successMessage, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }
    }
    catch (err) {
      if (err.response.status === 400) {
        toast.success(`${err.response.data.message}`, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
        return
      }
      toast.warning(`Please logout and login again`, {
        style: {
          color: "#010100",
          backgroundColor: "#FFF3B0",
        },
      });
    }
    finally {
      setSubmitting(false)
    }
  }

  async function kickMember(email) {
    try {
      const res = await axiosInstance.post(`/team/kick`, undefined, {
        headers: {
          teamid: user.teamId,
          userid: user.UUID,
          kickme_email: email,
        }
      })

      if (res.status == 200) {
        toast.success(`${res.data.message}`, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
        window.location.reload();
      }
    }
    catch (err) {
      toast.warning(`Please logout and login again`, {
        style: {
          color: "#010100",
          backgroundColor: "#FFF3B0",
        },
      });
    }
  }

  const clipboardText = async (value) => {
    try {
      await navigator.clipboard.writeText(value)
      setClipboardCheck("Copied")
      setTimeout(() => {
        setClipboardCheck(null)
      }, 2000);
    } catch (error) {
      setClipboardCheck("failed to copy")
    }
  }

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-4 w-full h-auto`}>
        <div className='col-span-2 md:col-span-2 border-yellowish border-[.5px] cursor-text px-6 pb-10'>
          <div className="">
            <div className="pt-8 flex flex-col">
              <label className="text-[24px] pb-4 text-yellowish">Team name</label>
              <input type="text" onChange={(e) => setTeamName(e.target.value)} value={teamName} className='bg-black border-yellowish p-4 border-[1px] rounded-md focus:outline-none' placeholder='Create your team name' />
            </div>
            {/* Create team button */}
            <button className={`flex justify-center items-center gap-2 bg-red p-4 text-white rounded-[8px] mb-8 md:mb-0 w-full mt-10`}
              type="submit"
              onClick={createTeam}
              disabled={submitting}
            >
              {submitting ? <Preloader bgHeight='100%' width="1rem" height="1rem" color="white" /> :
                <>
                  <p>Create Team</p>
                  <Image src={Images.arrowRight} className='h-6 w-6' alt='arrowRight' />
                </>
              }
            </button>
          </div>
          <div className=" font-anton text-3xl text-center text-yellowish pt-10">OR</div>
          <div className="">
            <div className="pt-8 flex flex-col">
              <label className="text-[24px] pb-4 text-yellowish">Team code</label>
              <input type="text"
                onChange={(e) => setJoinTeamId(e.target.value)}
                value={joinTeamId}
                className='bg-black border-yellowish p-4 border-[1px] rounded-md focus:outline-none' placeholder='Enter code to join a team' />
            </div>
            <button className={`flex justify-center items-center gap-2 bg-red p-4 text-white rounded-[8px] mb-8 md:mb-0 w-full mt-10`}
              type="submit"
              onClick={joinTeam}
              disabled={submitting}
            >
              {submitting ? <Preloader bgHeight='100%' width="1rem" height="1rem" color="white" /> :
                <>
                  <p>Join Team</p>
                  <Image src={Images.arrowRight} className='h-6 w-6' alt='arrowRight' />
                </>
              }
            </button>
          </div>
        </div>

        <div className='col-span-2 md:col-span-2 border-yellowish border-[.5px] cursor-text'>
          {
            loading ?
              <Preloader bgHeight="100%" width="5rem" height="5rem" color="red" /> : (
                Object.keys(yourTeam).length === 0 ? (
                  <div className='h-full flex justify-center items-center py-10 md:py-0'>
                    <Image src={Images.launch} className='h-20 w-20' alt='launch' />
                    <p className=' text-2xl font-generalsans text-yellowish28'>Create your team</p>
                  </div>
                ) : (
                  <div className='w-full'>
                    <div className="w-full bg-yellowish h-24 flex flex-col justify-center items-center">
                      <p className=' font-anton text-black text-3xl'>{yourTeam.name}</p>
                      {
                        leaderEmail === user.email && (
                          <div className='flex items-center gap-2 my-2'>
                            <p className=' text-black font-generalsans text-md'>{yourTeam.code}</p>
                            <Image src={Images.copy} className='h-6 w-6 cursor-pointer' onClick={() => clipboardText(yourTeam.code)} alt="clipboard" />
                            <span className='text-black font-generalsans text-xs'>{clipboardCheck}</span>
                          </div>
                        )
                      }
                    </div>
                    {teamMembers.map((t, idx) => (
                      <div key={idx} className="w-full bg-black border-b border-yellowish h-20 flex justify-center items-center">
                        <div className="flex justify-between items-center w-full px-8">
                          <div className="flex justify-center items-center gap-4">
                            <Image src={Images.profile} className='h-6 w-6' alt='profile' />
                            <div className='flex flex-col'>
                              <p className=' font-generalsans text-yellowish text-md md:text-lg'>{t.name} {leaderEmail === t.email && '| Leader'}</p>
                              <p className=' font-generalsans text-grey text-md md:text-xs'>{t.email}</p>
                            </div>
                          </div>
                          {(user.email === leaderEmail && leaderEmail !== t.email) && (
                            <Image
                              src={Images.userminus}
                              className='cursor-pointer'
                              onClick={() => kickMember(t.email)}
                              alt='userminus'
                            />
                          )}
                        </div>
                      </div>
                    ))}
                    {
                      leaderEmail === user.email &&
                      <button className='p-4 bg-red text-yellowish flex justify-center w-full' onClick={deleteTeam} disabled={submitting}>
                        {submitting ? <Preloader bgHeight='100%' width="1rem" height="1rem" color="white" /> : 'Delete'}
                      </button>
                    }
                  </div>
                ))}
        </div>
      </div >
    </>
  )
}
