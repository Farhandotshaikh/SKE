
export default {
    slug: "gss-puc",
    name: "GSS PUC",
    logo: "/images/logos/gss-puc.png",
    contact: { phone: "+91 00000 00000", email: "info@yourdomain.org" },

    // Enabled pages (Main is always available)
    pages: [
        "about", "academics", "student-corner", "facilities",
        "placements", "admissions", "iqac", "student-information",
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
            { icon: "book", title: "Library", image: "/images/facilities/library.jpg" },
            { icon: "flask", title: "Science Laboratories", image: "/images/facilities/labs.jpg" },
            { icon: "mic", title: "Auditorium", image: "/images/facilities/auditorium.jpg" },
        ],
    },
};