"use client";
import Image from "next/image";
import SmartShapes from "@/components/Global/SmartShapes";
import { useAuthState } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Images from "/public/assets/index.js";
import { rgbDataURL } from "@/utils/blurryImage";
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";

export default function Profile() {
	const year = ["1st", "2nd", "3rd", "4th"];
	const standard = ["9th", "10th", "11th", "12th"];

	const { user, setUser } = useAuthState();

	const userType = ["school", "college"];

	const [isChecked, setChecked] = useState(false);
	const [selectedUserType, setSelectedUserType] = useState(userType[0]);

	const handleToggle = () => {
		setChecked(!isChecked);
		setSelectedUserType(isChecked ? userType[0] : userType[1]);
	};

	const [errors, setErrors] = useState({});
	const [userDetails, setUserDetails] = useState({
		name: "",
		contact: "",
		college: "",
		school: "",
		gaurdianName: "",
		gaurdianContact: "",
		stream: "",
		year: "",
		grade: "",
	});

	/* Get user info when navigating to /profile */
	useEffect(() => {
		async function getMe() {
			try {
				const res = await axiosInstance.get("/user", {
					headers: {
						email: user.email,
					},
				});
				// const { data } = res

				if (res.status === 200) {
					console.log(data)
					setSelectedUserType(data.type)
					setUserDetails({
						name: data?.name,
						contact: data?.contact,
						// college: data?.college,
						school: data?.school,
						gaurdianName: data?.guardian_name,
						gaurdianContact: data?.guardian_contact,
						grade: data?.class,
						stream: data?.stream,
						year: data?.year,
					});
				}

			} catch (err) {
				console.error(err);
			}
		}
		getMe();
	}, []);

	const handleInputChangeUserProfile = (e) => {
		const { id, value } = e.target;

		setErrors((prevErrors) => ({
			...prevErrors,
			[id]: "",
		}));

		setUserDetails((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const [submitting, setSubmitting] = useState(false);
	const handleSubmitChangeUserProfile = async (e) => {
		e.preventDefault();
		// userDetails.email = user.email;
		// const newErrors = {};
		// ['name', 'contact', 'college', 'school', 'stream', 'year', 'standard', 'gaurdianName', 'gaurdianContact'].forEach(field => {
		// 	if (!userDetails[field].trim()) {
		// 		newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
		// 	}
		// });

		// if (Object.keys(newErrors).length > 0) {
		// 	setErrors(newErrors);
		// 	return;
		// }

		// // Clear errors if there are no validation errors
		// setErrors({});

		const url = selectedUserType === 'school' ?
			'/user/school' :
			'/user/college';

		const dataPayload = selectedUserType === 'school' ? {
			name: userDetails.name,
			email: user.email,
			school: userDetails.school,
			contact: userDetails.contact,
			class: userDetails.grade,
			guardian_contact: userDetails.gaurdianContact,
			guardian_name: userDetails.gaurdianName
		} : {
			name: userDetails.name,
			email: user.email,
			college: userDetails.college,
			contact: userDetails.contact,
			stream: userDetails.stream,
			year: userDetails.year
		};

		try {
			setSubmitting(true);
			const res = await axiosInstance.post(`${url}`, dataPayload);
			console.log(res);
			Cookies.set("studentId", res.data.userid, { expires: 7 });
			setUser((user) => ({
				...user,
				UUID: res.data.userid,
			}));

			// if (res.status === 200) {
			//     toast.success(`${res.data.message}`, {
			//         autoClose: 3000,
			//         position: "top-right",
			//         icon: <Image src={Images.logoVerify} alt="verify" />,
			//         hideProgressBar: true,
			//         style: { color: "#010100", backgroundColor: "#FEFAE0", font: "generalsans", fontSize: '14px', border: "0.5px solid #010100" },
			//     });
			// }
		} catch (err) {
			console.error(err);
		} finally {
			setSubmitting(false);
		}
	};

	const flexStart = "flex justify-start items-center";
	const flexEnd = "flex justify-end items-center";
	const flexCenter = "flex justify-center items-center";

	const userCheck = selectedUserType === "school"

	return (
		<>
			<div className="profile__container flex flex-col md:flex-row w-full px-0 md:px-20  border-yellowish text-yellowish">
				<div className="profile__left flex w-full md:w-1/2 border-x-[0.5px] flex-col">
					<div className="profile__title flex h-[312px] px-4 md:px-[90px] justify-center flex-col gap-8 border-b-[0.5px] overflow-hidden">
						<div className="flex flex-row items-center gap-6 md:gap-4">
							<Image
								src={user.avatar}
								className="border-yellowish rounded-[12px] border-[0.5px] z-[20]"
								alt="avatar"
								unoptimized
								width={80}
								height={80}
								placeholder="blur"
								blurDataURL={rgbDataURL(128, 128, 128)}
							/>
							<h1 className="font-anton text-[36px] md:text-[56px]">
								UPDATE PROFILE
							</h1>
						</div>
						<div className=" bg-yellowish h-auto w-full px-4 py-2 grid grid-cols-3 rounded-md">
							<div className={`col-span-2`}>
								{/* <p className=" text-greyish font-generalsans text-sm pt-2 pb-1">Define your institute type</p> */}
								<div className={`org_type ${flexStart} gap-4 py-2`}>
									<div className={`badge bg-red h-14 w-14 rounded-md ${flexCenter}`}>
										{selectedUserType === "school" ? (
											<Image src={Images.school} className="h-8 w-8" alt="school" />
										) : (
											<Image src={Images.college} className="h-8 w-8" alt="school" />
										)}
									</div>
									<div className="placeholder">
										<p className=" font-anton text-2xl text-black">{selectedUserType?.toUpperCase()}</p>
										<p className="text-greyish font-generalsans text-xs">{`You are updating as ${selectedUserType} student`}</p>
									</div>
								</div>
							</div>
							<div className={`col-span-1 ${flexEnd}`}>
								<label className="flex items-center cursor-pointer">
									<div className="relative">
										<input
											type="checkbox"
											className="hidden"
											checked={isChecked}
											onChange={handleToggle}
											value={selectedUserType}
										
										/>
										<div className="toggle__line w-12 bg-black rounded-full shadow-inner h-7"></div>
										<div className={`toggle__dot absolute top-[1.6px] w-6 h-6 bg-red rounded-full shadow inset-y-0 transition-transform delay-100 ${isChecked ? 'translate-x-6' : 'translate-x-0'}`}></div>
									</div>
								</label>
							</div>
						</div>
					</div>
					<div className="profile__left_input md:h-[400px] flex px-4 md:px-[90px] flex-col md:justify-center">
						<div className="input_name flex flex-col py-8 md:pb-8 md:pt-0">
							<label className="text-[24px] pb-4">Name</label>
							<input
								id="name"
								type="text"
								value={userDetails.name}
								onChange={handleInputChangeUserProfile}
								placeholder="Enter your full name"
								className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
							/>
							{errors.name && <span className="text-red pt-2 font-generalsans text-sm">*{errors.name}</span>}
						</div>
						<div className="input_contact flex flex-col pb-8 md:pb-0">
							<label className="text-[24px] pb-4">Contact No.</label>
							<input
								id="contact"
								type="text"
								value={userDetails.contact}
								onChange={handleInputChangeUserProfile}
								placeholder="Enter your contact no."
								className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
							/>
							{errors.contact && <span className="text-red pt-2 font-generalsans text-sm">{errors.contact}</span>}
						</div>
					</div>
				</div>

				<div className="profile__right border-x-[0.5px] md:border-r-[0.5px] flex w-full md:w-1/2 h-auto items-center md:py-8">
					<div className="collab__right_input h-full flex px-4 md:px-[90px] flex-col w-full justify-evenly">
						{userCheck ? (
							<div className="input_college flex flex-col pb-8">
								<label className="text-[24px] pb-4">School Name</label>
								<input
									id="school"
									type="text"
									value={userDetails?.school}
									onChange={handleInputChangeUserProfile}
									placeholder="Enter your school name"
									className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
								/>
								{errors.school && <span className="text-red pt-2 font-generalsans text-sm">{errors.school}</span>}
							</div>
						) : (
							<div className="input_college flex flex-col pb-8">
								<label className="text-[24px] pb-4">College Name</label>
								<input
									id="college"
									type="text"
									value={userDetails?.college}
									onChange={handleInputChangeUserProfile}
									placeholder="Enter your College Name"
									className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
								/>
								{errors.college && <span className="text-red pt-2 font-generalsans text-sm">{errors.college}</span>}
							</div>
						)}

						<div className="input_email flex flex-col pb-8">
							<label className="text-[24px] pb-4">Email ID</label>
							<input
								id="email"
								type="email"
								defaultValue={user.email}
								readOnly
								placeholder="Enter your email id"
								className="bg-black border-grey text-[#808080] border-[0.5px] p-4 text-[20px] rounded-[12px]"
								disabled
							/>
						</div>
						{
							userCheck ? (
								null
							) : (
								<div className="input_stream flex flex-col pb-8">
									<label className="text-[24px] pb-4">Stream</label>
									<input
										id="stream"
										type="text"
										value={userDetails.stream}
										onChange={handleInputChangeUserProfile}
										placeholder="Enter your stream"
										className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
									/>
									{errors.stream && <span className="text-red pt-2 font-generalsans text-sm">{errors.stream}</span>}
								</div>

							)
						}
						{
							userCheck ? (
								<>
									<div className="input_stream flex flex-col pb-8">
										<label className="text-[24px] pb-4">Guardian Name</label>
										<input
											id="gaurdianName"
											type="text"
											value={userDetails.gaurdianName}
											onChange={handleInputChangeUserProfile}
											placeholder="Enter your stream"
											className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
										/>
										{errors.gaurdianName && <span className="text-red pt-2 font-generalsans text-sm">{errors.gaurdianName}</span>}
									</div>
									<div className="input_stream flex flex-col pb-8">
										<label className="text-[24px] pb-4">Gaurdian Contact</label>
										<input
											id="gaurdianContact"
											type="text"
											value={userDetails.gaurdianContact}
											onChange={handleInputChangeUserProfile}
											placeholder="Enter your stream"
											className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
										/>
										{errors.gaurdianContact && <span className="text-red pt-2 font-generalsans text-sm">{errors.gaurdianContact}</span>}
									</div>
									<div className="input_year flex flex-col pb-8">
										<label className="text-[24px] pb-4">Standard</label>
										<select
											id="grade"
											className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
											onChange={handleInputChangeUserProfile}
										>
											{standard.map((option) => (
												<option
													className="hover:bg-red"
													key={option}
													value={option}
													defaultValue={standard[0]}
													selected={userDetails.grade === option}
												>
													{option}
												</option>
											))}
										</select>
									</div>
								</>
							) : (
								<div className="input_year flex flex-col pb-8">
									<label className="text-[24px] pb-4">Year</label>
									<select
										id="year"
										className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
										onChange={handleInputChangeUserProfile}
									>
										{year.map((option) => (
											<option
												className="hover:bg-red"
												key={option}
												value={option}
												defaultValue={year[0]}
												selected={userDetails.year === option}
											>
												{option}
											</option>
										))}
									</select>
								</div>
							)
						}



						<button
							className={`${submitting ? "bg-red-faded" : "bg-red"
								} p-4 text-white rounded-[8px] mb-8 md:mb-0`}
							type="submit"
							onClick={handleSubmitChangeUserProfile}
							disabled={submitting}
						>
							Submit
						</button>
						{/* <ToastContainer /> */}
					</div>
				</div >
			</div >
		</>
	);
}
