export const serviceCardData = [
  {
    id: 1,
    title: 'Business Administration',
    image: 'https://via.placeholder.com/150',
    description: 'Perfect for businesses that need reliable administrative support without hiring another employee. Please see our services below',
    services: [
        'Email management',
        'Scheduling and calendar management',
        'Customer communication',
        'Invoice preparation and follow-up',
        'Spreadsheet management',
        'Document creation and formatting',
        'Data entry',
        'Payroll administration support',
        'Timesheet administration',
        'Filing and organization',
    ],
    packages: [
        {
            name: 'Essential', 
            price: '£150/month',
            time: '5 hours per month',

        },
        {
            name: 'Growth',
            price: '£300/month',
            time: '10 hours per month',
        },
        {
            name: 'Business Partner',
            price: '£600/month',
            time: '20 hours per month. Priority support and dedicated time slots for your business needs.',
        }
    ]
  },
  {
    id: 2,
    title: 'Translation & Bilingual Support',
    image: 'https://via.placeholder.com/150',
    description: 'Helping businesses communicate confidently in English and Spanish.',
    services: [
        'Website translation',
        'Business documents',
        'Customer emails and correspondence',
        'Product descriptions',
        'Tourism information and brochures',
        'Welcome guides',
        'Proofreading and editing',
    ],
    packages: [
        {
            name: 'Small Documents', 
            price: 'From £30',
            time: '1-2 hours depending on length and complexity',

        },
        {
            name: 'Longer projects, Custom quotes, Website translation',
            price: 'From £0.10 per word',
            time: 'Variable depending on project scope',
        },
        
    ]
  },
  { //change services to array, and add packages as array of objects with name, price, and time.
    id: 3,
    title: 'Websites & Digital Support',
    image: 'https://via.placeholder.com/150',
    description: 'Helping businesses build a professional online presence. We specialise in Business Websites, Holiday Lets, B&B websites, Landing pages, and Portfolio websites.',
    services: ['Website creation and design', 'Website refresh and redesign', 'Responsive and mobile-friendly design', 'Website care plans', 'Website maintenance and updates', 'Website optimization for speed and performance', 'Website security and backups', 'Website analytics and reporting'],
    packages: [
            {
            name: 'Website creation and design',
            description: 'Creating a professional and user-friendly website for your business. We specialise in Business Websites, Holiday Lets, B&B websites, Landing pages, and Portfolio websites.',
            price: 'From £500',
            time: 'Variable depending on project scope',
            },
            {
            name: 'Starter Care Plan: Basic Updates',
            description: '',
            price: '£30/month',
            time: '1 hour per month',
            },
            {
            name: 'Business Care Plan',
            description: 'Content Updates, Monthly checks and Backup Reminders.',
            price: '£60/month',
            time: '2 hours per month',
            },
            {
            name: 'Premium Care Plan',
            description: 'Content Updates, Monthly checks, Backup Reminders, Priority Support, and Ongoing Improvements.',
            price: '£120/month',
            time: '4 hours per month',
            }
        ]
    },
  {
    id: 4,
    title: 'Digital Growth. (Coming Soon)',
    description: 'Helping businesses grow their online presence and attract more customers .',
    services: [
        'Social media management',
        'Content creation',
        'SEO optimization',
        'Email marketing',
        'Google Business Profile optimization',
    ]
  }
]