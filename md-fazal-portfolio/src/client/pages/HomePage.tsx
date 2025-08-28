import { ThemeToggle } from '@/client/components/ThemeToggle';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-theme-primary transition-colors duration-300">
      <ThemeToggle />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-theme-primary mb-6">MD Fazal Mustafa</h1>
        </div>

        {/* About Me Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">About me:</h2>
          <div className="space-y-4 text-theme-secondary leading-relaxed">
            <p>Born in Hazaribagh, grew up in Calcutta.</p>
            <p>Went to 3 different schools, from Co-ed to all boys, thus have seen both worlds.</p>
            <p>Studied Engineering, coz I love tinkering with stuff.</p>
            <p>Built & sold 2 companies, 1 failed product & on to my 3rd one now.</p>
            <p>Consulted 8 companies.</p>
            <p>Personally, in love with Autonomous systems and robotics since 2019.</p>
            <p>Building Products, AI & growth is where I thrive.</p>
            <p>Research work - coming soon.</p>
            <p>Find my writings here - <a href="https://fazalai.substack.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Substack</a></p>
            <p>Connect with me - <a href="mailto:contact@fazalmustafa.com" className="text-blue-600 hover:text-blue-800 underline">Email</a> <a href="https://linkedin.com/in/fazalmustafa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Linkedin</a> <a href="https://twitter.com/fazalmustafa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Twitter</a></p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">Work Experience</h2>
          
          <div className="space-y-8">
            {/* Heva AI */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-theme-primary">
                    <a href="https://www.heva.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Heva AI</a>
                  </h3>
                  <p className="text-lg text-theme-secondary">Founder & CEO</p>
                </div>
                <span className="text-sm text-theme-secondary">August 2025 - Ongoing</span>
              </div>
              <p className="text-theme-secondary">We're an Applied AI Research Lab working on accelerating civilization. A lot more update to come.</p>
            </div>

            {/* Consulting */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-theme-primary">Consulting</h3>
                  <p className="text-lg text-theme-secondary">Independent Consultant</p>
                </div>
                <span className="text-sm text-theme-secondary">September 2023 - Ongoing</span>
              </div>
              <p className="text-theme-secondary mb-3">I consulted the following startups:</p>
              <ul className="list-disc list-inside space-y-1 text-theme-secondary ml-4">
                <li><strong>Mechanify:</strong> Insuring the 2nd life of EVs</li>
                <li><strong>Upraised:</strong> AI powered solution to assess talent (Acquired)</li>
                <li><strong>HexStar Universe:</strong> Full-Stack Space Edtech Platform.</li>
                <li><strong>Stealth:</strong> Leveraging business data to automate Ops, strategies, etc.</li>
                <li><strong>Stealth:</strong> Innovating Defense for modern combat dynamics.</li>
              </ul>
            </div>

            {/* Self-Directed R&D */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-theme-primary">Self-Directed R&D - Research work</h3>
                  <p className="text-lg text-theme-secondary">Independent Researcher</p>
                </div>
                <span className="text-sm text-theme-secondary">September 2023 - March 2025</span>
              </div>
              <p className="text-theme-secondary mb-3">I did independent research work across Neuro, Vision, and Materials:</p>
              <ul className="list-disc list-inside space-y-1 text-theme-secondary ml-4">
                <li>Diagnosing Neurological disorders like Epilepsy, parkinson with just raw EEG data in seconds. We achieve accuracy as high as 99.5%.</li>
                <li>Image Vectorization Using CLIP for Integration with Large Language Models: A Novel Approach to Enhancing Memorization.</li>
                <li>Machine Learning-Driven Prediction and Simulation of Crystalline Structures for Advanced Ballistic Protection.</li>
              </ul>
            </div>

            {/* Associated Innovators */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-theme-primary">
                    <a href="https://associatedinnovators.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Associated Innovators</a>
                  </h3>
                  <p className="text-lg text-theme-secondary">Creator, freelance project</p>
                </div>
                <span className="text-sm text-theme-secondary">September, 2023 → October, 2023</span>
              </div>
              <p className="text-theme-secondary">At Associated Innovators, I am building their whole LP system and Portfolio Management system so as to be used by Investors like Suraj Juneja, Mahavir Sharma, Suniel Shetty, etc to keep accountability of their portfolio startups.</p>
            </div>

            {/* Freeflow Ventures */}
            <div className="border-l-4 border-red-500 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-theme-primary">
                    <a href="https://freeflow.zone/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Freeflow Ventures</a>
                  </h3>
                  <p className="text-lg text-theme-secondary">Part-Time, Tech consultant</p>
                </div>
                <span className="text-sm text-theme-secondary">May, 2023 - September 2023</span>
              </div>
              <p className="text-theme-secondary mb-3">I was Part-time Consulting on tech-related projects.</p>
              <ul className="list-disc list-inside space-y-1 text-theme-secondary ml-4">
                <li>I was part of ideating solutions for the implementation of AI-related solutions in a Shrimp factory and for its supply chain. It was the biggest shrimp company in India doing north of Rs 2000 Crores a year.</li>
                <li>I led the tech due diligence on a London-based deep tech startup who are engaged in transforming the fashion industry and counts Zara, LVMH, and other Fortune 100 company as their clients.</li>
              </ul>
            </div>

            {/* Sconto */}
            <div className="border-l-4 border-indigo-500 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-theme-primary">
                    <a href="https://www.sconto.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Sconto</a>
                  </h3>
                  <p className="text-lg text-theme-secondary">Investment Consultant, Enabler</p>
                </div>
                <span className="text-sm text-theme-secondary">May, 2023 → June, 2023</span>
              </div>
              <p className="text-theme-secondary">I was hired on a contractual basis to help Sconto raise its funds. I helped them by introducing them to 30+ VCs across India. Out of which I got them on call with 10+ VCs.</p>
            </div>

            {/* Lecturenotes */}
            <div className="border-l-4 border-pink-500 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-theme-primary">
                    <a href="https://lecturenotes.in/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Lecturenotes</a>
                  </h3>
                  <p className="text-lg text-theme-secondary">Founder, head of products, head of business, head of new initiatives</p>
                </div>
                <span className="text-sm text-theme-secondary">June, 2021 → April, 2023</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-theme-secondary ml-4">
                <li>I was named Co-Founder of the company post-acquisition because of my contributions.</li>
                <li>Headed the Product team for the Lecturenotes platform deployment & completely revamped the existing product modules both from a product & tech point of view.</li>
                <li>Was Instrumental in drastically reducing the Tech and infra cost while maintaining the smooth functioning of the platform.</li>
                <li>Coordinated every product requirement and aligned it with the business too. While also having a coordination channel with the marketing & sales team in order to keep track of the overall cost. Made sure that the product always remained in unison with the business plan.</li>
                <li>Here also I was part of the team that helped in raising $2.5 Million in Pre-Series A Funding.</li>
                <li>Responsible for developing the LectureRooms product from scratch, a new vertical of Lecturenotes.</li>
                <li>Completely responsible for the P&L Sheet, Tech, Product, Marketing, Business, Sales & recruitment activity for this vertical.</li>
                <li>After that, I stepped down from an Active Role.</li>
              </ul>
            </div>

            {/* Audifie */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-theme-primary">
                    <a href="https://www.audifie.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Audifie</a>
                  </h3>
                  <p className="text-lg text-theme-secondary">Creater, Founder, CEO</p>
                </div>
                <span className="text-sm text-theme-secondary">February, 2021 → April, 2021</span>
              </div>
              <p className="text-theme-secondary">We created Audifie so that users can listen to their documents. In early 2021, this was a unique achievement. But we were way ahead of our time; the tech cost just didn't make sense. This is the pre-Gen AI era, where converting text to voice for 1Mn characters used to cost $16. So we had to shut the product down.</p>
            </div>

            {/* Collegeshala */}
            <div className="border-l-4 border-teal-500 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-theme-primary">
                    <a href="https://www.linkedin.com/company/collegeshala-edutech/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Collegeshala</a>
                  </h3>
                  <p className="text-lg text-theme-secondary">Founder, CBO, CPO</p>
                </div>
                <span className="text-sm text-theme-secondary">December, 2019 → May, 2021</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-theme-secondary ml-4">
                <li>Ideated, conceptualized & developed India's First faculty-driven university-specific notes marketplace for Undergraduate academic degree courses. The development team was of only 3 people including me. And we rolled out the MVP in just 25 days.</li>
                <li>Coordinated with the Growth and Marketing Teams for successful Go-To-Market deployment of the product.</li>
                <li>Helped to scale the product so as to sustain the usage of the platform by 1 lakh+ student users across 15 Universities.</li>
                <li>Was Instrumental in raising a seed fund of $250K from an Angel Investor for further growth</li>
                <li>Our company was later acquired by LectureNotes Technologies in August 2021 in a multi-million-dollar deal.</li>
              </ul>
            </div>

            {/* Wholmeal */}
            <div className="border-l-4 border-cyan-500 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-theme-primary">
                    <a href="https://www.linkedin.com/company/wholmeal/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Wholmeal</a>
                  </h3>
                  <p className="text-lg text-theme-secondary">Founding Engineer, Android Developer, Operations</p>
                </div>
                <span className="text-sm text-theme-secondary">September, 2019 → November, 2019</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-theme-secondary ml-4">
                <li>Worked on their mobile app both Frontend using Flutter and Backend using Firebase & AWS.</li>
                <li>Post-launch the app garnered over 25k+ downloads in a month and through this app the company raked in 10 lakhs of revenue.</li>
                <li>That helped the startup to raise funds of Rs 40 lakhs.</li>
                <li>After that the 2 founders, I was the third guy in their startup. Helped them to set up processes & Ops with delivery agents, cooks, and delivery timelines.</li>
                <li>I helped them with all sorts of strategies regarding Products, Go-To-Market plans, Marketing & Outreach activities, etc.</li>
              </ul>
            </div>

            {/* Learning While Travelling */}
            <div className="border-l-4 border-gray-500 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-theme-primary">
                    <a href="https://learningwhiletravelling.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Learning While Travelling</a>
                  </h3>
                  <p className="text-lg text-theme-secondary">Intern, Front end development</p>
                </div>
                <span className="text-sm text-theme-secondary">June, 2019 → August, 2019</span>
              </div>
              <p className="text-theme-secondary">I revamped and built a whole new product for them.</p>
            </div>
          </div>
        </section>

        {/* Essays Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">Essays - 5</h2>
          <p className="text-theme-secondary mb-4">Always just show the 5 latest essays from my substack here & then a button "read more essays".</p>
          <a href="https://fazalai.substack.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
            Read more essays
          </a>
        </section>

        {/* DevRel Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">DevRel Experience</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-theme-primary">Google Developer Student Club Lead - Campus Lead</h3>
              <p className="text-theme-secondary">2020 - 2021</p>
              <p className="text-theme-secondary">I started the Google Developer Student Club at my College Campus and grew the community from 0 to 1500+ members. I built a core team of 8 to 10 folks and we executed 30+events, 2 Mini-Hackathons & 4 Programs.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-theme-primary">Google Cloud Facilitator - Program Lead</h3>
              <p className="text-theme-secondary">2022</p>
              <p className="text-theme-secondary">I was the Google Cloud Facilitator of my City and had to train at least 50 students on GCP. All the trainings were sucessfully finished by me and all the students received their completion badge.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-theme-primary">Facebook Developer Circle - Core member</h3>
              <p className="text-theme-secondary">2021</p>
              <p className="text-theme-secondary">I was the core member of the Facebook Developer Circle under the Lead Sabhyasachi Mukopadhyay. We built the community of 500+ strong developers learning Pytorch and other Meta technologies.</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-theme-primary">Google Developer Group, Kolkata - Core member</h3>
              <p className="text-theme-secondary">2019 - 2022</p>
              <p className="text-theme-secondary">I was a core member at GDG Kolkata, which was led by Rivu Das and Indranil Dutta. We built this community over three years and expanded it to 40,000+ developers from 100+ companies and 30+ colleges in the city. At GDG we conduct sessions and workshops on Android, Dart, Flutter, Tensorflow (ML), AR, and Web development. Hands-on session is done and one-on-one guidance is given to students who face difficulty in learning or if they are stuck at some bugs.</p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-theme-primary">AWS User Group, Kolkata - Core member</h3>
              <p className="text-theme-secondary">2019 - 2021</p>
              <p className="text-theme-secondary">I was a core member at AWS user Group Kolkata, wherein we built a community of 8000+ developers and also organised AWS' flagship event AWS Community Day in Kolkata. We trained all of these developers across 20+ AWS services like AWS EC2, S3, DynamoDB etc.</p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-semibold text-theme-primary">Cloud Native Computing Foundation User Group, Kolkata - Co-Founder</h3>
              <p className="text-theme-secondary">2019 - 2021</p>
              <p className="text-theme-secondary">I along with Chirag Nayyar started the CNCF Chapter for Kolkata, very quickly we grew it to 3000+ members. We conducted 20+ sessions on Azure, AWS, Kubernetes, Docker etc.</p>
            </div>

            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold text-theme-primary">Pie & AI by Deeplearning.ai - Ambassador</h3>
              <p className="text-theme-secondary">2020 - 2021</p>
              <p className="text-theme-secondary">When Deeplearning AI Community came to Kolkata to open their chapter "Pie & AI" for this city, almost 300+ undergrad students applied to be their ambassador. I was choosen out of them to lead the chapter for the city. Under my leadership we executed 15 sessions with 10 of the speakers from overseas and 3 learning tracks. We truly helped 3000+ students to upskill in AI.</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-theme-primary">Lecturenotes Campus Ambassador Program - Co-Founder</h3>
              <p className="text-theme-secondary">2022 - 2023</p>
              <p className="text-theme-secondary">At Lecturenotes our team built an ambassador program spanning to 1500+ Engineering Campuses in India giving us access to 3 Million Engineering Students pursuing B.Tech.</p>
            </div>
          </div>
        </section>

        {/* Feature in Media Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">Feature in Media</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-theme-primary">Yourstory</h3>
              <p className="text-theme-secondary mb-2">Collegeshala was featured in our seed round of $250K.</p>
              <a href="https://yourstory.com/companies/collegeshala" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://yourstory.com/companies/collegeshala</a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-theme-primary">Inc 42</h3>
              <p className="text-theme-secondary mb-2">Collegeshala getting acquired by Lecturenotes.</p>
              <a href="https://inc42.com/buzz/edtech-startup-lecturenotes-acquires-collegeshala-for-an-undisclosed-amount/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://inc42.com/buzz/edtech-startup-lecturenotes-acquires-collegeshala-for-an-undisclosed-amount/</a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-theme-primary">Entrackr</h3>
              <p className="text-theme-secondary mb-2">When we raised a $2.5 Million Pre-Series round for Lecturenotes.</p>
              <a href="https://entrackr.com/2022/03/lecturenotes-raises-2-5-mn-in-pre-series-a-round/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://entrackr.com/2022/03/lecturenotes-raises-2-5-mn-in-pre-series-a-round/</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">Contact</h2>
          <p className="text-theme-secondary">I am mostly active on Email, Twitter, and Linkedin. Email is preferred but I do respond to DMs quickly.</p>
        </section>

        {/* SubStack Embed Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">SubStack</h2>
          <div className="bg-theme-card border border-theme-card rounded-lg p-6">
            <iframe 
              src="https://fazalai.substack.com/embed" 
              width="100%" 
              height="400" 
              style={{ border: 'none' }}
              title="SubStack Embed"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
