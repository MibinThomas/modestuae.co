import { useEffect } from 'react';
import { pageTitle } from '../../helpers/PageTitle';
import Section from '../Section';
import AboutUsSection from '../Section/AboutSection';
import BrandSection from '../Section/BrandSection';
import ContactSection from '../Section/ContactSection';
import HeroSection from '../Section/HeroSection';
import MovingTextSection from '../Section/MovingTextSection';
// import PortfolioSection from '../Section/PortfolioSection';
import PostSection from '../Section/PostSection';
import ServiceSection from '../Section/ServiceSection';
// import TeamSection from '../Section/TeamSection';
import TestimonialSection from '../Section/TestimonialSection';
import WhyChooseUsSection from '../Section/WhyChooseUsSection';

const heroData = [
  {
    bgUrl: '/images/hero_main_1.jpg',
    titleUp: 'This Week Only for World Premier',
    title: 'Empowering Business <br> Growth in the UAE',
    subTitle:
      'Reliable, personalized consulting for company formation, <br> PRO, finance, and compliance - simplifying growth at every stage.',
    btnText: 'Get A Quote',
    btnUrl: '/contact',
  },
  {
    bgUrl: '/images/hero_slider_2.jpeg',
    titleUp: 'This Week Only for World Premier',
    title: 'Your Partner for UAE <br> Business Setup',
    subTitle:
      'From company formation to compliance, accounting, and advisory, <br> we support UAE businesses with expertise.',
    btnText: 'Get A Quote',
    btnUrl: '/contact',
  },
  {
    bgUrl: '/images/hero_slider_3.jpeg',
    titleUp: 'This Week Only for World Premier',
    title: 'Simplifying Business. <br> Enabling Growth.',
    subTitle:
      '15+ years of expertise delivering end-to-end business solutions <br> that help UAE companies grow with confidence.',
    btnText: 'Get A Quote',
    btnUrl: '/contact',
  },
];

const movingTextData = [
  '* Company Formation & Corporate Services',
  '* PRO Services',
  '* Audit & Assurance',
  '* VAT Consulting',
  '* Payroll Outsourcing',
  '* Customs Audit & Consulting',
];

const serviceData = [
  {
    iconUrl: '/images/icons/service_icon_1.svg',
    title: 'Company Formation',
    subTitle:
      'Complete UAE business setup across mainland and free zones with licensing, amendments and closure.',
    imgUrl: '/images/companyformation.png',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_2.svg',
    title: 'PRO Services',
    subTitle:
      'Reliable PRO services for visas, Emirates ID, labor approvals, attestations and government process.',
    imgUrl: '/images/pro.png',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_3.svg',
    title: 'Accounting & Bookkeeping',
    subTitle:
      'Accurate bookkeeping and accounting ensuring compliance, clear reporting and financial control. UAE',
    imgUrl: '/images/acounting.png',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_1.svg',
    title: 'Audit & Assurance',
    subTitle:
      'Independent audit and assurance services ensuring transparency, compliance and business credibility.',
    imgUrl: '/images/audit.png',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'VAT Consulting',
    subTitle:
      'End-to-end VAT registration, filing, advisory and audit support ensuring full UAE tax compliance.Across UAE',
    imgUrl: '/images/vat.png',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Payroll Outsourcing',
    subTitle:
      'Secure payroll processing with WPS compliance, salary structuring, reports and final settlements.',
    imgUrl: '/images/payroll.png',
    href: '/service/services-details',
  },  
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Customs Consulting',
    subTitle:
      'Customs audit preparation and advisory ensuring trade compliance and duty optimization across UAE.',
    imgUrl: '/images/customs.png',
    href: '/service/services-details',
  }, 
];

const testimonialData = [
  {
    imgUrl: '/images/avatar_1.png',
    rating: '5',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Darlene Robertson',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_2.png',
    rating: '4.5',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Peter Johnson',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_3_1.png',
    rating: '4.5',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Max Lawrence',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_4.png',
    rating: '4',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Darlene Robertson',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_1.png',
    rating: '5',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Darlene Robertson',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_2.png',
    rating: '4.5',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Peter Johnson',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_3.png',
    rating: '4.5',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Max Lawrence',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_4.png',
    rating: '4',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Darlene Robertson',
    designation: 'Web design',
  },
];

const brandData = [
  { imgUrl: '/images/brand_1.svg' },
  { imgUrl: '/images/brand_2.svg' },
  { imgUrl: '/images/brand_3.svg' },
  { imgUrl: '/images/brand_4.svg' },
  { imgUrl: '/images/brand_5.svg' },
];

const postData = [
  {
    imgUrl: '/images/post_1.jpeg',
    title: 'What services does your business provide?',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'Admin',
    adminUrl: '/',
    numberOfComment: 3,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_2.jpeg',
    title: 'Introducing the latest tech features for you',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'Admin',
    adminUrl: '/',
    numberOfComment: 4,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_3.jpeg',
    title: 'The creative studio programm coming soon',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'Admin',
    adminUrl: '/',
    numberOfComment: 5,
    commentUrl: '/blog/blog-details',
  },
];

export default function Home() {
  pageTitle('Business Home');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection data={heroData} />

      <Section>
        <MovingTextSection data={movingTextData} />
      </Section>

      <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="cs_gray_bg"
        style={{ backgroundImage: 'url("/images/services_bg2.png")' }}
      >
        <ServiceSection
          sectionTitleUp="Our Service List"
          sectionTitle="We Provide The Solution <br />For Our Clients"
          sectionSubTitle="Comprehensive business consulting services covering company formation, compliance, accounting, VAT, payroll, and audits - designed to support seamless operations and sustainable growth in the UAE."
          sectionTitleDown="Digital agency  services built specifically for your business"
          sectionBtnText="Find More Services"
          sectionBtnUrl="/service"
          data={serviceData}
        />
      </Section>

      <Section
        pt="135"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="position-relative"
      >
        <AboutUsSection
          thumbUrl="/images/about_us_1.png"
          experienceBgUrl="/images/about_us_2.png"
          experienceIconUrl="/images/experience_icon.svg"
          experienceNumber="15"
          experienceTitle="Work Experience"
          sectionTitleUp="About Us"
          sectionTitle='Get Ready for Success with <span className="text-accent">MODEST</span> Your Path to Growth.'
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. Creating visual content, such as logos, brochures, infographics, and other branding materials."
          grothTitle="Bussiness development"
          grothPercentage="90"
          featureList={[
            {
              title: 'Company Formation',
              subTitle:
                'Business setup across UAE mainland and free zones with complete legal support',
            },
            {
              title: 'PRO Services',
              subTitle: 'End-to-end government, visa, and documentation assistance.',
            },
          ]}
          btnText="Get A Quote"
          btnUrl="/contact"
          videoBtnText="Watch the video"
          videoBtnUrl="https://www.youtube.com/embed/0Tz4Ycjbdbg"
        />
      </Section>

      

      <Section
        pt="135"
        ptLg="75"
        pb="100"
        pbLg="40"
        className="position-relative cs_iconbox_2_wrap overflow-hidden"
      >
        <WhyChooseUsSection
          imgUrlLeft="/images/why_choose_us_1.png"
          imgUrlRight="/images/why_choose_us_2.png"
          sectionTitleUp="Why Choose Us"
          sectionTitle='Developing a <span className="text-accent"> design that <br /> is easy </span> to use and <br /> navigate'
          sectionSubTitle="Providing legal advice, contract drafting, compliance
          assistance, intellectual <br /> property protection, and other
          legal support for businesses. Creating visual <br /> content,
          such as logos, brochures, infographics."
          services={[
            {
              imgUrl: '/images/icons/service_icon_5.svg',
              title: 'Digital agency services',
            },
            {
              imgUrl: '/images/icons/service_icon_6.svg',
              title: 'Creative digital agency',
            },
            {
              imgUrl: '/images/icons/service_icon_7.svg',
              title: 'Super expert developers',
            },
            {
              imgUrl: '/images/icons/service_icon_8.svg',
              title: 'Creating a user friendly design',
            },
          ]}
        />
      </Section>

      <Section
        pt="140"
        ptLg="75"
        pb="135"
        pbLg="75"
        style={{ backgroundImage: `url(${'/images/testimonial_bg.jpeg'})` }}
      >
        <TestimonialSection
          sectionTitleUp="Testimonial"
          sectionTitle="What They’re Saying?"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          data={testimonialData}
        />
      </Section>

      {/* <Section pb="115" pbLg="55">
        <TeamSection
          data={teamData}
          sectionTitle="Meet the professional team <br/> behind the success"
          sectionTitleUp="Meet Our Team Member"
        />
      </Section> */}

      <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="background-filled overflow-hidden"
        style={{ backgroundImage: `url(${'/images/contactus_bg.png'})` }}
      >
        <ContactSection
          sectionTitleUp="Contact With Us"
          sectionTitle="Let’s Work Together?"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          textVarient="text-white"
          className="cs_mb_40"
          sectionImgUrl="/images/call.png"
          contactInfo={[
            {
              imgUrl: '/images/icons/contact_icon_1.svg',
              titleUp: 'Have Any Question?',
              title: '+(04) 252 4686',
              textColor: 'text-white',
            },
            {
              imgUrl: '/images/icons/contact_icon_2.svg',
              titleUp: 'Send Email',
              title: 'info@modestuae.co',
              textColor: 'text-white',
            },
            {
              imgUrl: '/images/icons/contact_icon_3.svg',
              titleUp: 'Address',
              title: 'Office 301A LOB 15 JAFZA Dubai UAE',
              textColor: 'text-white',
            },
          ]}
        />
      </Section>

      <Section pt="140" ptLg="80">
        <BrandSection data={brandData} />
      </Section>

      <Section pt="115" ptLg="75" pb="110" pbLg="50">
        <PostSection
          data={postData}
          sectionTitleUp="Find The Blogs"
          sectionTitle="Find Out Latest News <br/> and Articles"
        />
      </Section>
    </>
  );
}
