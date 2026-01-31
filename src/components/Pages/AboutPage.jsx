import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import AboutUsSection from '../Section/AboutSection';
import ServiceSection from '../Section/ServiceSection';
// import TeamSection from '../Section/TeamSection';
import TestimonialSection from '../Section/TestimonialSection';
import { pageTitle } from '../../helpers/PageTitle';

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

const teamData = [
  {
    imgUrl: '/images/team_member_1.jpeg',
    name: 'Ralph Edwards',
    designation: 'Web designer',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_2.jpeg',
    name: 'Wade Warren',
    designation: 'Marketing Coordinator',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_3.jpeg',
    name: 'Jane Cooper',
    designation: 'Creative Designer',
    srcUrl: '/team/team-details',
  },
];

const testimonialData = [
  {
    imgUrl: '/images/avatar_1.png',
    rating: '4',
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
    rating: '4.7',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Max Lawrence',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_4.png',
    rating: '3.9',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Darlene Robertson',
    designation: 'Web design',
  },
  {
    imgUrl: '/images/avatar_3.png',
    rating: '5',
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: 'Max Lawrence',
    designation: 'Web design',
  },
];

export default function AboutPage() {
  pageTitle('About Us');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="About Us" bgUrl="/images/breadcrumb.png" />

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
          experienceNumber="40"
          experienceTitle="Work Experience"
          sectionTitleUp="About Us"
          sectionTitle='Get Ready for Success with <span className="text-accent">MODEST</span> Your Path to Growth.'
          sectionSubTitle="With over 15 years of experience in the consulting industry, we specialize in delivering comprehensive business solutions designed to support companies at every stage of their growth. Our expertise spans across company formation, compliance, financial services, and operational support—ensuring that our clients launch, run, and scale their businesses with confidence and efficiency.
We pride ourselves on our commitment to excellence, personalized service, and deep understanding of the UAE’s dynamic regulatory environment. Whether you’re a startup, SME, or multinational enterprise, our team is equipped to guide you with strategic insight and practical solutions.
<br>We pride ourselves on our commitment to excellence, personalized service, and deep understanding of the UAE’s dynamic regulatory environment. Whether you’re a startup, SME, or multinational enterprise, our team is equipped to guide you with strategic insight and practical solutions."
          grothTitle="Company Formation & Corporate Services"
          grothPercentage="90"
          featureList={[
            {
              title: 'Our Mission',
              subTitle:
                'To empower businesses with reliable, efficient, and innovative consulting services that simplify processes, ensure compliance, and enable sustainable growth.',
            },
            {
              title: 'Our Vision',
              subTitle: 'To be the leading consulting partner in the region—recognized for trust, expertise, and value—helping businesses succeed in an ever-evolving economic landscape.',
            },
          ]}
          btnText="Get A Quote"
          btnUrl="/contact"
          videoBtnText="Watch the video"
          videoBtnUrl="https://www.youtube.com/embed/dItYhwMyBH8?si=vTPeKiR_eF2bpxKQ&amp;start=10"
        />
        
      </Section>

      <Section pt="140" ptLg="80" pb="130" pbLg="70" className="bg-primary">
        <ServiceSection
          data={serviceData}
          sectionTitleDown="<span className='text-accent'>Digital agency</span> services built specifically for your business"
          sectionBtnText="Find More Services"
          sectionBtnUrl="/service"
          textVariant="text-white"
        />
      </Section>

      {/* <Section pt="133" ptLg="75">
        <TeamSection
          data={teamData}
          sectionTitle="Meet the professional team <br/>behind the success"
          sectionTitleUp="Meet Our Team Member"
        />
      </Section> */}

      <Section
        pt="110"
        ptLg="55"
        pb="140"
        pbLg="80"
        style={{ backgroundImage: `url(${'/images/testimonial_bg.jpeg'})` }}
      >
        <TestimonialSection
          sectionTitleUp="Testimonial"
          sectionTitle="What They’re Saying?"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          data={testimonialData}
        />
      </Section>
    </>
  );
}
