import { img } from '../site'
export default {
    slug: "rpd-degree",
    name: "RPD Degree",
    logo: "/images/logos/rpd-degree.png",
    contact: { phone: "+91 00000 00000", email: "info@yourdomain.org" },

    // Enabled pages (Main is always available)
    pages: [
        "about", "academics", "student-corner", "facilities",
        "placements", "admissions", "iqac", "student-information", "organisational-structure",
        "department"
    ],

    main: {
        hero: {
            image: "",                       // empty falls back to the default arcade image
            line1: "A Legacy",
            line2: "Since 1966",
            text: "One line about the college goes here.",
        },
        quickLinks: [
            { icon: "book", title: "Academics", text: "Programmes and course combinations.", page: "academics" },
            { icon: "download", title: "Student Information", text: "Circulars, forms and results.", page: "student-information" },
            { icon: "briefcase", title: "Placements", text: "Recruiters and career support.", page: "placements" },
            { icon: "award", title: "Admissions", text: "Eligibility, process and fees.", page: "admissions" },
        ],
        message: {
            role: "Principal",
            name: "Principal Name",
            photo: "",
            text: "A short message from the principal goes here.",
        },
        programmes: [
            { icon: "flask", title: "Bachelor of Science (B.Sc.)", text: "Science degree with laboratory-based learning.", page: "academics" },
            { icon: "award", title: "Certificate Courses", text: "Short courses alongside degree studies.", page: "academics" },
            { icon: "compass", title: "Departments", text: "Explore faculty, facilities and activities.", page: "department" },
        ],
        events: [
            { day: "12", month: "Oct", title: "Event title goes here", venue: "Auditorium" },
            { day: "18", month: "Oct", title: "Event title goes here", venue: "Seminar Hall" },
            { day: "25", month: "Oct", title: "Event title goes here", venue: "Campus" },
            { day: "02", month: "Nov", title: "Event title goes here", venue: "Campus" },
        ],
        facilities: [
            { icon: "book", title: "Library", image: img.arcade },
            { icon: "flask", title: "Science Laboratories", image: img.arcade },
            { icon: "mic", title: "Auditorium", image: img.arcade },
        ],
    },
    about: {
        hero: {
            image: "",                       // empty falls back to the default arcade image
            line1: "A Legacy",
            line2: "Since 1966",
            text: "One line about the college goes here.",
        },
        intro: [
            "First paragraph about the college.",
            "Second paragraph about the college.",
        ],
        introImage: "",                    // empty falls back to the gazebo image
        milestones: [
            { year: "1966", title: "GSS Science College", text: "Bifurcated from RPD College." },
            { year: "1966", title: "GSS Science College", text: "Bifurcated from RPD College." },
            { year: "1966", title: "GSS Science College", text: "Bifurcated from RPD College." },
            { year: "1966", title: "GSS Science College", text: "Bifurcated from RPD College." },
            { year: "1966", title: "GSS Science College", text: "Bifurcated from RPD College." },
            // ...more
        ],
        vision: "Placeholder: the college's vision statement.",
        mission: "Placeholder: the college's mission statement.",
        message: {
            quote: "Placeholder: a short statement from the Principal.",
            text: "Placeholder: the Principal's message.",
            name: "Principal Name",
            role: "Principal, GSS College",
            photo: "",
        },
    },
    structure: {
        hero: {
            image: "",                       // empty falls back to the default arcade image
            line1: "A Legacy",
            line2: "Since 1966",
            text: "One line about the college goes here.",
        },
        message: {
            quote: "Placeholder: a short statement from the Principal.",
            text: "Placeholder: the Principal's message.",
            name: "Principal Name",
            role: "Principal, GSS College",
            photo: "",
        },
        management: [
            { name: "Member Name", role: "Chairperson", photo: "" },
            { name: "Member Name", role: "Secretary", photo: "" },
            { name: "Member Name", role: "Member", photo: "" },
            { name: "Member Name", role: "Member", photo: "" },
        ],
        academicLeadership: [
            { name: "Name", role: "Vice Principal", photo: "" },
            { name: "Name", role: "Dean, Academics", photo: "" },
            { name: "Name", role: "HOD", photo: "" },
            { name: "Name", role: "HOD", photo: "" },
        ],
        policies: [
            { title: "Code of conduct", type: "PDF", file: "s" },   // empty file hides the Download link
            { title: "Procedures", type: "PDF", file: "s" },
            { title: "Policies & ethics", type: "PDF", file: "s" },
            { title: "Anti-ragging policy", type: "PDF", file: "s" },
            // ...more
        ],
    },
    departments: [
        {
            slug: "department-1",                    // used by the filter chip and the URL hash
            name: "Department 1",                    // chip label (the overview heading uses the same name)
            overview: "Placeholder: a short overview of the department, its focus and its teaching approach.",
            image: "",                               // empty falls back to a default image
            facilities: [
                { icon: "flask", title: "Laboratory", image: "" },
                { icon: "book", title: "Library corner", image: "" },
                { icon: "presentation", title: "Seminar room", image: "" },
            ],
            faculty: [
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
            ],
            activities: [
                { icon: "users", title: "Activity title", text: "Placeholder: short description." },
                { icon: "award", title: "Achievement title", text: "Placeholder: short description." },
                { icon: "trophy", title: "Achievement title", text: "Placeholder: short description." },
            ],
        },
        {
            slug: "department-2",
            name: "Department 2",
            overview: "Placeholder: a short overview of the department, its focus and its teaching approach.",
            image: "",
            facilities: [
                { icon: "flask", title: "Laboratory", image: "" },
                { icon: "book", title: "Library corner", image: "" },
                { icon: "presentation", title: "Seminar room", image: "" },
            ],
            faculty: [
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
            ],
            activities: [
                { icon: "users", title: "Activity title", text: "Placeholder: short description." },
                { icon: "award", title: "Achievement title", text: "Placeholder: short description." },
                { icon: "trophy", title: "Achievement title", text: "Placeholder: short description." },
            ],
        },
        {
            slug: "department-3",
            name: "Department 3",
            overview: "Placeholder: a short overview of the department, its focus and its teaching approach.",
            image: "",
            facilities: [
                { icon: "flask", title: "Laboratory", image: "" },
                { icon: "book", title: "Library corner", image: "" },
                { icon: "presentation", title: "Seminar room", image: "" },
            ],
            faculty: [
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
            ],
            activities: [
                { icon: "users", title: "Activity title", text: "Placeholder: short description." },
                { icon: "award", title: "Achievement title", text: "Placeholder: short description." },
                { icon: "trophy", title: "Achievement title", text: "Placeholder: short description." },
            ],
        },
        {
            slug: "department-4",
            name: "Department 4",
            overview: "Placeholder: a short overview of the department, its focus and its teaching approach.",
            image: "",
            facilities: [
                { icon: "flask", title: "Laboratory", image: "" },
                { icon: "book", title: "Library corner", image: "" },
                { icon: "presentation", title: "Seminar room", image: "" },
            ],
            faculty: [
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
            ],
            activities: [
                { icon: "users", title: "Activity title", text: "Placeholder: short description." },
                { icon: "award", title: "Achievement title", text: "Placeholder: short description." },
                { icon: "trophy", title: "Achievement title", text: "Placeholder: short description." },
            ],
        },
        {
            slug: "department-5",
            name: "Department 5",
            overview: "Placeholder: a short overview of the department, its focus and its teaching approach.",
            image: "",
            facilities: [
                { icon: "flask", title: "Laboratory", image: "" },
                { icon: "book", title: "Library corner", image: "" },
                { icon: "presentation", title: "Seminar room", image: "" },
            ],
            faculty: [
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
            ],
            activities: [
                { icon: "users", title: "Activity title", text: "Placeholder: short description." },
                { icon: "award", title: "Achievement title", text: "Placeholder: short description." },
                { icon: "trophy", title: "Achievement title", text: "Placeholder: short description." },
            ],
        },
        {
            slug: "department-6",
            name: "Department 6",
            overview: "Placeholder: a short overview of the department, its focus and its teaching approach.",
            image: "",
            facilities: [
                { icon: "flask", title: "Laboratory", image: "" },
                { icon: "book", title: "Library corner", image: "" },
                { icon: "presentation", title: "Seminar room", image: "" },
            ],
            faculty: [
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
                { name: "Faculty Name", role: "Designation", detail: "One-line detail.", photo: "" },
            ],
            activities: [
                { icon: "users", title: "Activity title", text: "Placeholder: short description." },
                { icon: "award", title: "Achievement title", text: "Placeholder: short description." },
                { icon: "trophy", title: "Achievement title", text: "Placeholder: short description." },
            ],
        },
    ],
    departmentsHero: { image: "", line1: "Our", line2: "Departments", text: "One line about the departments." },
    studentCornerHero: { image: "", line1: "Student", line2: "Corner", text: "One line about student life." },
    // Add inside each college's data file, next to main, about, structure and departments
    studentCorner: {
        explore: [
            { icon: "download", title: "Student Information", text: "RTI, forms, circulars, reports, prospectus and results.", page: "student-information" },
            { icon: "compass", title: "Student Guidance & Mentoring", text: "Mentoring, counselling and career guidance.", page: "" },   // add a page key once that page exists
        ],

        events: [
            { day: "12", month: "Oct", title: "Event title goes here", venue: "Auditorium" },
            { day: "18", month: "Oct", title: "Event title goes here", venue: "Seminar Hall" },
            { day: "25", month: "Oct", title: "Event title goes here", venue: "Campus" },
            { day: "02", month: "Nov", title: "Event title goes here", venue: "Campus" },
        ],

        // Filter chips: "All" is added automatically, so list only the categories
        newsCategories: ["News", "Events", "Clubs", "Sports"],

        news: [
            { category: "Events", date: "Oct 08", title: "Srujan 2026: Where Student Talent Takes the Spotlight", image: "", link: "" },
            { category: "News", date: "Sep 21", title: "News headline goes here", image: "", link: "" },
            { category: "Clubs", date: "Sep 14", title: "News headline goes here", image: "", link: "" },
            // ...more; each item's category must match one in newsCategories
        ],
    },
    // Add inside each college's data file, next to main, about, structure, departments and studentCorner
    placements: {
        about: {
            text: "Placeholder: how the placement cell works with students and employers.",
            image: "",                              // empty falls back to a default image
        },

        // Stats strip: values are strings so you can write "00%", "00+", "000+"
        stats: [
            { value: "00%", label: "Placement Rate" },
            { value: "00+", label: "Recruiters" },
            { value: "000+", label: "Offers" },
        ],

        // Companies That Visit: add a logo path to show the logo; the name shows when logo is empty
        companies: [
            { name: "Company Logo", logo: "" },
            { name: "Company Logo", logo: "" },
            { name: "Company Logo", logo: "" },
            { name: "Company Logo", logo: "" },
            { name: "Company Logo", logo: "" },
        ],

        // Campus Recruitment: the 01, 02, 03... numbers are generated from the order
        process: [
            { title: "Register", text: "Sign up with the placement cell." },
            { title: "Prepare", text: "Soft skills and aptitude training." },
            { title: "Interview", text: "Attend campus recruitment drives." },
            { title: "Offer", text: "Receive and accept offers." },
        ],

        // Career Preparation
        preparation: [
            { icon: "briefcase", title: "Internship Opportunities", text: "Placeholder: internship partners and process." },
            { icon: "users", title: "Soft Skills", text: "Placeholder: communication and workplace skills." },
            { icon: "target", title: "Aptitude", text: "Placeholder: aptitude training and tests." },
        ],
    },
    placementsHero: { image: "", line1: "Career", line2: "Placements", text: "One line about placements." },
    // Add inside each college's data file, next to main, about, structure, departments, studentCorner and placements
    admissions: {
        // "Why GSS College?": the heading uses the college name automatically
        why: [
            { icon: "landmark", title: "A Heritage Campus", text: "Part of the SKE Society since 1966." },
            { icon: "flask", title: "Practical Learning", text: "Laboratory-based science education." },
            { icon: "users", title: "Dedicated Faculty", text: "Placeholder: faculty mentoring and support." },
        ],

        // Eligibility table
        eligibilityNote: "Placeholder criteria, to be confirmed by the college.",
        eligibility: [
            { programme: "B.Sc.", qualification: "Pre-university (Science)", criteria: "To be confirmed", intake: "00" },
            { programme: "Certificate Courses", qualification: "To be confirmed", criteria: "To be confirmed", intake: "00" },
        ],

        // Admission Process: the 01, 02, 03... numbers are generated from the order
        process: [
            { title: "Apply", text: "Fill in the application form." },
            { title: "Submit documents", text: "Hand in the required documents." },
            { title: "Verification", text: "The college reviews your application." },
            { title: "Pay fees", text: "Confirm your place." },
        ],

        // Documents Required
        documents: [
            { title: "Marks cards", text: "Placeholder: originals and copies." },
            { title: "Transfer certificate", text: "Placeholder: from previous institution." },
            { title: "Identity proof", text: "Placeholder: accepted documents." },
            { title: "Photographs", text: "Placeholder: number and size." },
            { title: "Caste certificate", text: "Placeholder: where applicable." },
            { title: "Migration certificate", text: "Placeholder: where applicable." },
        ],

        // Fees Information
        feesNote: "Amounts below are placeholders.",
        feeFile: "",                                  // PDF path; an empty value hides "Download fee structure"
        fees: [
            { programme: "B.Sc.", tuition: "₹ 00,000", other: "₹ 0,000", total: "₹ 00,000" },
            { programme: "Certificate Courses", tuition: "₹ 0,000", other: "₹ 000", total: "₹ 0,000" },
        ],
    },
    admissionsHero: { image: "", line1: "Admissions", line2: "2026-27", text: "One line about admissions." },
    iqacHero: { image: "", line1: "Internal Quality", line2: "Assurance Cell", text: "One line about the IQAC." },
    // Add inside each college's data file, next to main, about, structure, departments, studentCorner, placements and admissions
    iqac: {
        about: {
            text: "Placeholder: the purpose of the IQAC and its role at the college.",
        },

        // IQAC Composition: same card layout as the other people sections
        composition: [
            { name: "Member Name", role: "Role", photo: "" },
            { name: "Member Name", role: "Role", photo: "" },
            { name: "Member Name", role: "Role", photo: "" },
            { name: "Member Name", role: "Role", photo: "" },
        ],

        // Reports & Documents: an empty file hides that row's Download link
        reports: [
            { title: "AQAR report", type: "PDF", file: "s" },
            { title: "NAAC self-study report", type: "PDF", file: "s" },
            { title: "Meeting minutes", type: "PDF", file: "s" },
            { title: "Quality initiatives", type: "PDF", file: "s" },
            // ...more
        ],
    },
    // Add inside each college's data file, next to main, about, structure, departments, studentCorner, placements, admissions and iqac
    facilities: {
        // Filter chips: "All" is added automatically, so list only the categories
        categories: ["Academic", "Laboratories", "Sports", "Student Spaces"],

        // Each tile's category must match one in categories; it is also the small amber label on the tile
        items: [
            { icon: "book", title: "Library", category: "Academic", image: "" },
            { icon: "flask", title: "Science Laboratories", category: "Laboratories", image: "" },
            { icon: "mic", title: "Auditorium", category: "Student Spaces", image: "" },
            { icon: "trophy", title: "Sports Grounds", category: "Sports", image: "" },
            { icon: "presentation", title: "Seminar Halls", category: "Academic", image: "" },
            { icon: "compass", title: "Gardens", category: "Student Spaces", image: "" },
            // ...more
        ],
    },
    facilitiesHero: { image: "", line1: "Campus", line2: "Facilities", text: "One line about the campus." },
    studentInformation: {
        categories: ["RTI Information", "Forms", "Circulars", "Reports", "Prospectus"],

        documents: [
            { title: "RTI information", type: "PDF", category: "RTI Information", file: "s" },
            { title: "Application form", type: "PDF", category: "Forms", file: "s" },
            { title: "Circular title", type: "PDF", category: "Circulars", file: "s" },
            { title: "Annual report", type: "PDF", category: "Reports", file: "s" },
            { title: "College prospectus", type: "PDF", category: "Prospectus", file: "s" },
            { title: "Circular title", type: "PDF", category: "Circulars", file: "s" },
        ],

        results: {
            text: "Results open on the university results portal.",
            link: "",
            buttonLabel: "View Results",
        },
    },
    studentInformationHero: { image: "", line1: "Student", line2: "Information", text: "One line about student resources." },
};