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

  const [loading, setLoading] = useState(false)
  const [yourTeam, setYourTeam] = useState({})
  const [teamMembers, setTeamMembers] = useState([])

  const [clipboardValue, setClipboardValue] = useState(user.teamId);
  const [clipboardCheck, setClipboardCheck] = useState(null);
  const [teamName, setTeamName] = useState('');
  const [leaderEmail, setLeaderEmail] = useState();

  const [joinTeamId, setJoinTeamId] = useState('');

  useEffect(() => {
    async function getTeamDetails() {
      try {
        setLoading(true)

        const response = await axiosInstance.get(`/team/${user.teamId || joinTeamId}`)

        if (response.status === 200) {
          setYourTeam(response.data)
          setLeaderEmail(response.data.leader_email)
          setTeamMembers(response.data.college_members.concat(response.data.school_members))
        }
        console.log(response.data);
      }
      catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false)
      }
    }
    getTeamDetails()
  }, [user.teamId])


  async function createTeam() {
    try {
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

      Cookies.set("teamId", response.data.code, { expires: 7 });
      setUser((user) => ({
        ...user,
        teamId: response.data.code
      }));

      setClipboardValue(response.data.code)

      if (response.status === 200) {
        toast.success(`${response.data.message}`, {
          icon: <Image src={Images.logoVerify} alt="verify_logo" />,
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }

    } catch (error) {
      console.error(error)
    }
  }

  async function leaveTeam (){
    try {
      const res = await axiosInstance.post(`/team/leave`, undefined, {
        headers: {
          teamid: user.teamId,
          userid: user.UUID
        }
      })
      if (res.status == 200) {
        Cookies.remove('teamId')
        setUser((user) => ({
          ...user,
          teamId: undefined
        }));
        toast.success(`${res.data}`, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }
      window.location.reload();
    }
    catch (err) {
      console.log(err);
    }
  }

  async function joinTeam() {
    try {
      const response = await axiosInstance.post(`/team/join/${joinTeamId}`,
        undefined,
        {
          headers: {
            userid: user.UUID
          }
        }
      );
      console.log(response)

      Cookies.set("teamId", response.data.code, { expires: 7 });

      setUser((user) => ({
        ...user,
        teamId: response.data.code
      }));

      console.log(user.teamId, "yyy");
      // setClipboardValue(response.data.code)

      if (response.status === 200) {

        consoleg.log(response.data)
        toast.success(`${response.data.message}`, {
          icon: <Image src={Images.logoVerify} alt="verify_logo" />,
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }

      window.location.reload();

    } catch (error) {
      console.error(error)
    }
  }

  async function deleteTeam() {
    try {
      const res = await axiosInstance.post(`/team/delete/${user.teamId}`, undefined, {
        headers: {
          userid: user.UUID
        }
      })
      if (res.status == 200) {
        Cookies.remove('teamId')
        setUser((user) => ({
          ...user,
          teamId: undefined
        }));
        toast.success(`${res.data}`, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  async function leaveTeam (){
    try {
      const res = await axiosInstance.post(/team/leave, undefined, {
        headers: {
          teamid: user.teamId,
          userid: user.UUID
        }
      })
      if (res.status == 200) {
        Cookies.remove('teamId')
        setUser((user) => ({
          ...user,
          teamId: undefined
        }));
        toast.success(`${res.data}`, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }
      window.location.reload();
    }
    catch (err) {
      console.log(err);
    }
  }

  const clipboardText = async () => {
    try {
      await navigator.clipboard.writeText(clipboardValue)
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
            {user.teamId !== undefined ? (
              <div className={`flex justify-between items-center gap-2 bg-yellowish28 p-4 text-white rounded-[8px] mb-2 w-full mt-10 h-14`}>
                <p className='text-yellowish font-generalsans' >{clipboardValue}</p>
                <Image src={Images.copy} className='h-6 w-6 cursor-pointer' onClick={clipboardText} />
              </div>
            ) : (
              <button className={`flex justify-center items-center gap-2 bg-red p-4 text-white rounded-[8px] mb-8 md:mb-0 w-full mt-10`}
                type="submit"
                onClick={createTeam}
              >
                <p>Create Team</p>
                <Image src={Images.arrowRight} className='h-6 w-6' />
              </button>
            )}
            {
              clipboardCheck ? (
                <span className=' text-greyfade font-generalsans text-sm '>{clipboardCheck}</span>
              ) : null
            }
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
            >
              <p>Join Team</p>
              <Image src={Images.arrowRight} className='h-6 w-6' />
            </button>
          </div>
        </div>

        <div className='col-span-2 md:col-span-2 border-yellowish border-[.5px] pl-5 cursor-text'>
          {
            loading ?
              <Preloader width="5rem" height="5rem" color="red" /> : (
                Object.keys(yourTeam).length === 0 ? <p>No team</p> : (
                  <>
                    <div className='pt-4'>
                      <h1 className=' text-3xl text-red font-anton'>Team Name:</h1>
                      <p>{yourTeam.name}</p>
                      <h1 className=' text-3xl text-red font-anton'>Leader Email:</h1>
                      <p>{yourTeam.leader_email}</p>
                      <h1 className=' text-3xl text-red font-anton'>Leader Contact:</h1>
                      <p>{yourTeam.leader_contact}</p>
                      <h1 className=' text-3xl text-red font-anton'>Team Code:</h1>
                      <p>{yourTeam.code}</p>
                      <h1 className=' text-3xl text-red font-anton'>Team Members:</h1>
                      <ul>
                        {teamMembers.map((t, idx) => (
                          <li key={idx}>{t.name} | {t.email}</li>
                        ))}
                      </ul>
                    </div>
                    {
                      leaderEmail === user.email ?
                        <button className='p-4 bg-red text-yellowish' onClick={deleteTeam}>delete</button>
                        :
                        <button className='p-4 bg-red text-yellowish' onClick={leaveTeam}>leave</button>
                    }
                  </>
                ))}
        </div>
      </div>
    </>
  )
}


