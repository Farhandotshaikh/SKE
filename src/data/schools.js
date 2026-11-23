import { img } from './site'

/*
  One entry per school. The School page template (src/pages/School.jsx) reads everything from here,
  so to fill in a school you only edit its entry. Any field you leave out falls back to the
  placeholder copy from the design.

  The `slug` becomes the URL: /institutions/<slug>. These slugs match the links on the
  Institutions page, so don't rename them without updating the links.
*/

const defaults = {
  image: img.courtyard, // photo for the hero and "About the School"
  about: 'Placeholder — the school’s history, classes offered and medium of instruction.',
  headmaster: {
    name: 'Headmaster Name',
    role: 'Headmaster',
    quote: 'Placeholder — a short statement from the Headmaster.',
    message: 'Placeholder — a message to students and parents.',
    photo: null, // e.g. '/images/headmaster-thalakwadi.jpg'
  },
  facilities: 'Placeholder — library, laboratory and playground.',
  activities: 'Placeholder — clubs, sports and events.',
  contact: {
    address: '', // e.g. 'Tilakwadi, Belagavi, Karnataka'
    phone: '', // e.g. '+91 00000 00000'
    email: '', // e.g. 'school@domain.org'
  },
}

// Merge one school's overrides on top of the defaults (headmaster/contact merge field-by-field).
const school = (data) => ({
  ...defaults,
  ...data,
  headmaster: { ...defaults.headmaster, ...data.headmaster },
  contact: { ...defaults.contact, ...data.contact },
})

export const schools = [
  school({ slug: 'thalakwadi-high-school', name: 'Thalakwadi High School' }),
  school({ slug: 'swadhyay-vidyamandir-high-school', name: 'Swadhyay Vidyamandir High School' }),
  school({ slug: 'shri-vaikunth-mukund-shanbhag-marathi-school', name: 'Shri Vaikunth Mukund Shanbhag Marathi School' }),
  school({ slug: 'mohanlal-rampal-bhandari-kannada-school', name: 'Mohanlal Rampal Bhandari Kannada School' }),
  school({ slug: 'swatantra-senani-baburao-thakur-memorial-institute', name: 'Swatantra Senani Baburao Thakur Memorial Institute' }),
]

export const getSchool = (slug) => schools.find((s) => s.slug === slug)

// Same slug rule the nav and Institutions page use, for linking from a school's name.
export const schoolSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
