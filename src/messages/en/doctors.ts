export default {
	Doctors: {
		heroTag: "Top Rated Specialists",
		heroTitle1: "Meet Our",
		heroTitle2: "Specialist Doctors",
		heroDesc:
			"Our team consists of world-class medical professionals dedicated to providing exceptional care and personalized treatment for every patient.",
		filters: {
			all: "All",
			cardiology: "Cardiology",
			neurology: "Neurology",
			pediatrics: "Pediatrics",
			general: "General Physician",
		},
		search: {
			placeholder: "Search Name...",
			inputPlaceholder: "Type to search specialists or medical departments...",
			quickFilters: "Quick Filters",
			availableToday: "Available Today",
			topRated: "Top Rated",
			yearsExp: "10+ Years Exp",
			noResults: "No results found for your search.",
			explore: "Explore",
			allSpecialists: "All Specialists",
			availableSpecialties: "Available Specialties",
			ourDoctors: "Our Doctors",
			specialistRole: "Specialist Doctor",
			noDoctorsFound: "No doctors found matching",
			clearSearch: "Clear search",
		},
		grid: {
			availableToday: "Available Today",
			reviews: "(150+ Reviews)",
			experience: "Experience",
			success: "Success",
			bookConsultation: "Book Consultation",
		},
		whyUs: {
			title1: "Committed to Your",
			title2: "Health & Wellbeing",
			desc: "Our doctors are more than just medical experts—they are compassionate caregivers committed to your long-term health journey.",
			quote:
				'"Healing is a matter of time, but it is sometimes also a matter of opportunity."',
			author: "— Hippocrates",
		},
		features: [
			{
				title: "World Class Experts",
				desc: "Our doctors come from top medical institutions globally.",
			},
			{
				title: "Patient-First Care",
				desc: "Personalized treatment plans tailored to your specific needs.",
			},
			{
				title: "Certified Specialists",
				desc: "Every doctor is board-certified in their respective specialty.",
			},
			{
				title: "Team Collaboration",
				desc: "Our specialists work together to ensure accurate diagnosis.",
			},
		],
		backToDoctors: "Back to All Specialists",
		aboutDoctor: "About the Specialist",
		keyAchievements: "Credentials & Achievements",
		primarySkills: "Clinical Specialties & Skills",
		sidebarTitle: "Book Consultation",
		sidebarDesc:
			"Secure an active consult slot with this specialist doctor today.",
		scheduleBtn: "Request Consult",
	},
	ContentDoctors: {
		"1": {
			name: "Dr. Sara Khan",
			specialty: "Chief Cardiologist",
			about:
				"Dr. Sara Khan is a highly recognized global pioneer in cardiovascular interventions. With over 15 years of board-certified clinical practice at top-tier healthcare institutions, she specializes in complicated congenital repairs and robotic-assisted bypass operations.",
			achievements: [
				"Global Cardiovascular Excellence Award (2024)",
				"Board Certified in Cardiothoracic Interventions",
				"Author of over 45 academic cardiology papers",
			],
			skills: [
				"Robotic-assisted cardiac repair",
				"Complex angioplasty procedures",
				"Heart transplant post-care support",
				"Congenital valve reconstruction",
			],
		},
		"2": {
			name: "Dr. John Doe",
			specialty: "General Physician",
			about:
				"Dr. John Doe provides comprehensive primary diagnostic care and chronic condition management. He prioritizes preventative healthcare and lifestyle consults to empower patients to live healthy, balanced lives.",
			achievements: [
				"Board Certified in Preventative Family Medicine",
				"Excellence in Community Care citation (2023)",
				"Continuous family healthcare director for 8 years",
			],
			skills: [
				"Routine clinical checkup diagnostics",
				"Chronic wellness and lifestyle consulting",
				"Immunotherapy and preventative vaccinations",
				"Geriatric health management",
			],
		},
		"3": {
			name: "Dr. Usman Ahmed",
			specialty: "Pediatric Specialist",
			about:
				"Dr. Usman Ahmed has built an exceptional reputation for kid-friendly diagnostic care and milestone tracking. He creates warm, compassionate spaces to support childhood development, pediatric allergy assessments, and recovery.",
			achievements: [
				"Board Certified in Pediatrics & Infant Health",
				"Pediatric Academic Residency Honor Graduate",
				"Pioneered localized childhood immunization campaigns",
			],
			skills: [
				"Comprehensive pediatric physical assessments",
				"Developmental milestone evaluations",
				"Safe pediatric immunization programs",
				"Childhood allergy diagnostic screening",
			],
		},
		"4": {
			name: "Dr. Yusuf Qadri",
			specialty: "Neurologist",
			about:
				"Dr. Yusuf Qadri is a distinguished Neurologist focusing on cognitive diagnostics, degenerative brain conditions, and neuromuscular rehabilitation. He utilizes precision EEG telemetry to formulate effective recovery plans.",
			achievements: [
				"Board Certified in Neurological Diagnostics",
				"Neuro-rehabilitation Center Founder Award",
				"Active researcher in innovative cognitive therapies",
			],
			skills: [
				"Electroencephalogram (EEG) telemetry",
				"Neuromuscular motor diagnostic tests",
				"Migraine & cognitive chronic therapy",
				"Stroke post-recovery rehabilitation",
			],
		},
	},
	ContentTestimonials: {
		"1": {
			name: "Sara Ali Khan",
			role: "Cardiologist Patient",
			content: "Thanks for all the services, no doubt it is the best hospital.",
		},
		"2": {
			name: "Simon Targett",
			role: "Neurologist Patient",
			content: "Thanks for all the services, no doubt it is the best hospital.",
		},
		"3": {
			name: "Sara Ali Khan",
			role: "Cardiologist Patient",
			content: "Thanks for all the services, no doubt it is the best hospital.",
		},
	},
} as const;
