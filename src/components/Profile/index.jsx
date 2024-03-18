import axios from "axios";
import Image from "next/image";
import Images from "/public/assets/index.js";
import Cookies from "js-cookie";
import { useAuthState } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { rgbDataURL } from "@/utils/blurryImage";
import axiosInstance from "@/utils/axiosInstance";
import Preloader from "../Global/Preloader";
import { useForm } from 'react-hook-form';

export default function Profile() {
	const [userDetails, setUserDetails] = useState({
		name: "",
		contact: "",
		college: "",
		school: "",
		guardianName: "",
		guardianContact: "",
		stream: "",
		year: "",
		grade: "",
	});

	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
		values: userDetails
	});

	const year = ["Select year", "1st", "2nd", "3rd", "4th"];
	const standard = ["Select standard", "9th", "10th", "11th", "12th"];
	const userType = ["school", "college"];

	const { user, setUser } = useAuthState();

	const [isChecked, setChecked] = useState(false);
	const [toggleDisabled, setToggleDisabled] = useState(false);
	const [selectedUserType, setSelectedUserType] = useState(userType[0]);

	const userCheck = selectedUserType === userType[0];

	const handleToggle = () => {
		setChecked(!isChecked);
		setSelectedUserType(isChecked ? userType[0] : userType[1]);
	};

	/* Get user info when navigating to /profile route */
	useEffect(() => {
		const source = axios.CancelToken.source();
		async function getMe() {
			try {
				const res = await axiosInstance.get("/user", {
					headers: {
						email: user.email,
					},
				});
				const { data } = res;

				if (res.status === 200) {
					setToggleDisabled(true);
					setSelectedUserType(data.type);
					setUserDetails({
						name: data.name,
						contact: data.contact,
						college: data?.college,
						school: data?.school,
						guardianName: data?.guardian_name,
						guardianContact: data?.guardian_contact,
						grade: data?.class,
						stream: data?.stream,
						year: data?.year,
					});
				}
			} catch (err) {
				if (axios.isCancel(err)) {
					console.error("Axios error: ", err.message);
				}
				else {
					console.error(err);
				}
			}
		}
		getMe();

		return () => {
			source.cancel("Request Cancelled.");
		}
	}, []);

	async function handleSubmitChangeUserProfile(data) {
		const url = userCheck ? "/user/school" : "/user/college";

		const dataPayload = userCheck   /* userCheck true when school */
			? {
				name: data.name.trim(),
				email: user.email,
				school: data.school.trim(),
				contact: data.contact.trim(),
				class: data.grade,
				guardian_contact: data.guardianContact.trim(),
				guardian_name: data.guardianName.trim(),
			}
			: {
				name: data.name.trim(),
				email: user.email,
				college: data.college.trim(),
				contact: data.contact.trim(),
				stream: data.stream.trim(),
				year: data.year,
			};
		console.log(dataPayload);
		try {
			const res = await axiosInstance.post(`${url}`, dataPayload);
			Cookies.set("studentId", res.data.id, { expires: 7 });
			setUser((user) => ({
				...user,
				UUID: res.data.id,
			}));
			setToggleDisabled(true);
			if (res.status === 200) {
				toast.success(`${res.data.message}`, {
					icon: <Image src={Images.logoVerify} alt="verify" />,
					style: {
						color: "#010100",
						backgroundColor: "#FEFAE0",
					},
				});
			}
		} catch (err) {
			console.error(err);
		}
	};

	const flexStart = "flex justify-start items-center";
	const flexEnd = "flex justify-end items-center";
	const flexCenter = "flex justify-center items-center";

	return (
		<form onSubmit={handleSubmit(handleSubmitChangeUserProfile)}>
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
								<div className={`org_type ${flexStart} gap-4 py-2`}>
									<div
										className={`badge bg-red h-14 w-14 rounded-md ${flexCenter}`}
									>
										{userCheck ? (
											<Image
												src={Images.school}
												className="h-8 w-8"
												alt="school"
											/>
										) : (
											<Image
												src={Images.college}
												className="h-8 w-8"
												alt="college"
											/>
										)}
									</div>
									<div className="placeholder">
										<p className=" font-anton text-2xl text-black">
											{selectedUserType?.toUpperCase()}
										</p>
										<p className="text-greyish font-generalsans text-xs">{`You are updating as ${selectedUserType} student`}</p>
									</div>
								</div>
							</div>
							<div className={`col-span-1 ${flexEnd}`}>
								<label className="flex items-center cursor-pointer">
									<div
										className={`relative ${toggleDisabled && "cursor-not-allowed"
											}`}
									>
										<input
											type="checkbox"
											className="hidden"
											checked={isChecked}
											onChange={handleToggle}
											value={selectedUserType}
											disabled={toggleDisabled}
										/>
										<div className="toggle__line w-12 bg-black rounded-full shadow-inner h-7"></div>
										<div
											className={`toggle__dot absolute top-[1.6px] w-6 h-6 bg-red rounded-full shadow inset-y-0 transition-transform delay-100 ${toggleDisabled && "cursor-not-allowed"
												} ${userCheck ? "translate-x-0" : "translate-x-[1.35rem]"} `}
										></div>
									</div>
								</label>
							</div>
						</div>
					</div>

					<div className="profile__left_input md:h-[400px] flex px-4 md:px-[90px] flex-col md:justify-center">
						<div className="input_name flex flex-col py-8 md:pb-8 md:pt-0">
							<label className="text-[24px] pb-4">Name</label>
							<input
								type="text"
								{...register("name", { required: "Name is required" })}
								placeholder="Enter your full name"
								className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
							/>
							{errors.name && <span className="text-red pt-2 font-generalsans text-sm">{errors.name.message}</span>}
						</div>
						<div className="input_contact flex flex-col pb-8 md:pb-0">
							<label className="text-[24px] pb-4">Contact No.</label>
							<input
								type="text"
								{...register("contact", { pattern: /^\d{10}$/ })}
								placeholder="Enter your contact no."
								className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
							/>
							{errors.contact && errors.contact.type === "pattern" && <span className="text-red pt-2 font-generalsans text-sm">Invalid contact no.</span>}
						</div>
					</div>
				</div>

				<div className="profile__right border-x-[0.5px] md:border-r-[0.5px] flex w-full md:w-1/2 h-auto items-center md:py-8">
					<div className="collab__right_input h-full flex px-4 md:px-[90px] flex-col w-full justify-evenly">
						{userCheck ? (
							<div className="input_college flex flex-col pb-8">
								<label className="text-[24px] pb-4">School Name</label>
								<input
									type="text"
									{...register("school", { required: "School name is required" })}
									placeholder="Enter your school name"
									className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
								/>
								{errors.school && <span className="text-red pt-2 font-generalsans text-sm">{errors.school.message}</span>}
							</div>
						) : (
							<div className="input_college flex flex-col pb-8">
								<label className="text-[24px] pb-4">College Name</label>
								<input
									type="text"
									{...register("college", { required: "College name is required" })}
									placeholder="Enter your College Name"
									className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
								/>
								{errors.college && <span className="text-red pt-2 font-generalsans text-sm">{errors.college.message}</span>}
							</div>
						)}

						<div className="input_email flex flex-col pb-8">
							<label className="text-[24px] pb-4">Email ID</label>
							<input
								type="email"
								defaultValue={user.email}
								readOnly
								placeholder="Enter your email id"
								className="bg-black border-grey text-[#808080] border-[0.5px] p-4 text-[20px] rounded-[12px]"
								disabled
							/>
						</div>

						{userCheck ? null : (
							<>
								<div className="input_stream flex flex-col pb-0.5">
									<label className="text-[24px] pb-4">Stream</label>
									<input
										type="text"
										{...register("stream", { required: "Stream is required" })}
										placeholder="Enter your stream"
										className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
									/>
								</div>
								{errors.stream && <span className="text-red pt-2 font-generalsans text-sm">{errors.stream.message}</span>}
							</>
						)}

						{userCheck ? (
							<>
								<div className="input_stream flex flex-col pb-8">
									<label className="text-[24px] pb-4">Guardian Name</label>
									<input
										type="text"
										{...register("guardianName", { required: "Guardian name is required" })}
										placeholder="Enter your Guardian's name"
										className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
									/>
									{errors.guardianName && <span className="text-red pt-2 font-generalsans text-sm">{errors.guardianName.message}</span>}
								</div>
								<div className="input_stream flex flex-col pb-8">
									<label className="text-[24px] pb-4">Guardian Contact</label>
									<input
										type="text"
										{...register("guardianContact", { pattern: /^\d{10}$/ })}
										placeholder="Enter your Guardian's contact no."
										className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
									/>
									{errors.guardianContact && errors.guardianContact.type === 'pattern' && <span className="text-red pt-2 font-generalsans text-sm">Invalid contact no.</span>}
								</div>
								<div className="input_year flex flex-col pb-8">
									<label className="text-[24px] pb-4">Standard</label>
									<select
										className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
										{...register("grade", { required: "Standard is required" })}
									>
										{standard.map((option) => (
											<option
												className="hover:bg-red"
												key={option}
											>
												{option}
											</option>
										))}
									</select>
									{errors.grade && <span className="text-red pt-2 font-generalsans text-sm">{errors.grade.message}</span>}
								</div>
							</>
						) : (
							<div className="input_year flex flex-col pb-8">
								<label className="text-[24px] pb-4">Year</label>
								<select
									className="bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]"
									{...register("year", { required: true })}
								>
									{year.map((option) => (
										<option
											className="hover:bg-red"
											key={option}
										>
											{option}
										</option>
									))}
								</select>
								{errors.year && <span className="text-red pt-2 font-generalsans text-sm">{errors.year.message}</span>}
							</div>
						)}

						<button
							className={`flex justify-center ${isSubmitting ? "bg-red-faded" : "bg-red"
								} p-4 text-white rounded-[8px] mb-8 md:mb-0`}
							type="submit"
							disabled={isSubmitting}
						>
							{!isSubmitting ? 'Save' : <Preloader width="2.5rem" height="2.5rem" bgWidth="2.5rem" bgHeight="2.5rem" color='#FEFAE0' />}
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}
