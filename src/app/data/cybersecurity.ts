export type Service = {
    id: string;
    num: string;
    icon: string;
    iconClassName: string;
    title: string;
    def: string;
    role: string;
    resp: string;
    skills: string[];
    solutions: string[];
    bullets: string[];
    note: string;
  };
  
  export type CaseStudy = {
    num: string;
    company: string;
    sector: string;
    challenge: string;
    solution: string;
    result: string;
    resultVal: string;
  };

  export type Faq = {
    q: string;
    a: string;
  };
  


export const tocItems = [
    ['svc-1', 'Network Security'],
    ['svc-2', 'Endpoint Security'],
    ['svc-3', 'Cloud Security'],
    ['svc-4', 'Application Security'],
    ['svc-5', 'Identity & Access Management'],
    ['svc-6', 'Data Security'],
    ['svc-7', 'SOC Services'],
    ['svc-8', 'Vulnerability Assessment'],
    ['svc-9', 'Penetration Testing'],
    ['svc-10', 'Managed Security (MSSP)'],
    ['svc-11', 'Incident Response'],
    ['svc-12', 'Threat Intelligence'],
    ['svc-13', 'Risk Assessment'],
    ['svc-14', 'Compliance & Regulatory'],
    ['svc-15', 'Email Security'],
    ['svc-16', 'Web Security'],
    ['svc-17', 'Disaster Recovery'],
    ['svc-18', 'IoT Security'],
    ['svc-19', 'Mobile Security'],
    ['svc-20', 'Security Awareness Training'],
  ] as const;
  
  export const stats = [
    { value: '$345B', label: 'Global Market by 2026' },
    { value: '20', label: 'Core Services Covered' },
    { value: '3.5M', label: 'Unfilled Security Jobs' },
    { value: '+15%', label: 'YoY Threat Growth' },
  ];


export const services: Service[] = [
  {id:'svc-1',num:'01',icon:'🛡️',iconClassName:'ic-blue',title:'Network Security',
  def:'Network security focuses on protecting an organization\'s internal and external networks from unauthorized access, cyberattacks, and data breaches. A company network includes routers, switches, firewalls, and servers that connect all digital infrastructure. Hackers often target networks to gain entry into corporate systems.',
  role:'Network Security Engineer / Architect',
  resp:'Design, implement, and monitor network defense systems including firewalls, IDS/IPS, and VPNs to prevent unauthorized access and detect malicious traffic in real time.',
  skills:['Firewall Configuration','IDS/IPS Management','VPN Security','Traffic Analysis','Network Protocols'],
  solutions:['Firewalls','Intrusion Detection Systems (IDS)','Intrusion Prevention Systems (IPS)','Network traffic monitoring','VPN security'],
  bullets:['Prevent unauthorized access','Detect suspicious network activity','Protect internal infrastructure','Secure remote connections'],
  note:'With the rise of hybrid work environments, network security has become even more important.'},
 {id:'svc-2',num:'02',icon:'💻',iconClassName:'ic-pink',title:'Endpoint Security',
  def:'Endpoint security protects individual devices connected to a company network such as laptops, desktops, smartphones, tablets, and servers. Each device can become a potential entry point for hackers. Endpoint security solutions monitor devices and prevent malware infections, ransomware attacks, and unauthorized access.',
  role:'Endpoint Security Analyst',
  resp:'Deploy and manage endpoint protection platforms, respond to device-level threats, and enforce device compliance policies across the entire organization.',
  skills:['EDR Platforms','Anti-Malware Tools','Device Encryption','Mobile Device Management','Threat Hunting'],
  solutions:['Antivirus and anti-malware','Endpoint Detection and Response (EDR)','Device encryption','Remote device management'],
  bullets:['Block malware and ransomware infections','Monitor device behavior continuously','Enable remote device management','Protect both office and remote employees'],
  note:'Endpoint security ensures that all employee devices remain protected whether they are working from the office or remotely.'},
 {id:'svc-3',num:'03',icon:'☁️',iconClassName:'ic-green',title:'Cloud Security',
  def:'Many businesses now store their data and applications in cloud platforms such as AWS, Microsoft Azure, and Google Cloud. While cloud computing offers flexibility and scalability, it also introduces new security risks. Cloud security protects cloud infrastructure, applications, and data from cyber threats.',
  role:'Cloud Security Engineer',
  resp:'Secure cloud workloads, enforce identity controls, manage cloud security posture, and ensure data encryption across multi-cloud environments.',
  skills:['AWS/Azure/GCP Security','CSPM Tools','IAM Policies','Container Security','Data Encryption'],
  solutions:['Cloud workload protection','Identity and access control','Cloud security monitoring','Data encryption','Secure configuration management'],
  bullets:['Prevent unauthorized access','Protect sensitive data stored in cloud environments','Monitor cloud workload activity','Manage secure configurations'],
  note:'Strong cloud security prevents unauthorized access and protects sensitive data stored in cloud environments.'},
 {id:'svc-4',num:'04',icon:'🔐',iconClassName:'ic-gold',title:'Application Security',
  def:'Application security focuses on protecting software applications from vulnerabilities and cyberattacks. Web applications are a common target for hackers because they often contain security flaws. Common application attacks include SQL injection, Cross-site scripting (XSS), remote code execution, and authentication bypass.',
  role:'Application Security Engineer (AppSec)',
  resp:'Integrate security into the SDLC, conduct code reviews, run vulnerability scans, and protect applications from OWASP Top 10 threats throughout development and runtime.',
  skills:['SAST/DAST Tools','OWASP Frameworks','Secure Code Review','API Security','DevSecOps'],
  solutions:['Secure coding practices','Application vulnerability scanning','Security testing during development','Runtime protection'],
  bullets:['Prevent SQL injection attacks','Block Cross-site scripting (XSS)','Block remote code execution','Prevent authentication bypass'],
  note:'Application security ensures that websites, mobile apps, and software platforms remain secure from cyber threats.'},
 {id:'svc-5',num:'05',icon:'🔑',iconClassName:'ic-purple',title:'Identity & Access Management (IAM)',
  def:'Identity and Access Management ensures that only authorized users can access company systems and data. IAM systems verify user identities and control what resources they can access, reducing insider threats and preventing unauthorized access to sensitive systems.',
  role:'IAM Engineer / Identity Architect',
  resp:'Design and manage MFA, SSO, RBAC, and PAM systems to ensure least-privilege access and reduce insider threat exposure across the organization.',
  skills:['MFA & SSO Implementation','RBAC / ABAC','PAM Solutions','Directory Services','Zero Trust Identity'],
  solutions:['Multi-factor authentication (MFA)','Single sign-on (SSO)','Role-based access control (RBAC)','Identity verification systems'],
  bullets:['Verify user identities before granting access','Enforce least-privilege principles','Reduce insider threat risk','Prevent unauthorized access to sensitive systems'],
  note:'IAM reduces insider threats and prevents unauthorized access to sensitive systems.'},
 {id:'svc-6',num:'06',icon:'🗄️',iconClassName:'ic-blue',title:'Data Security / Data Protection',
  def:'Data security focuses on protecting sensitive information such as customer data, financial records, intellectual property, and business documents. Cybercriminals often target valuable data for financial gain or espionage.',
  role:'Data Security Analyst',
  resp:'Implement encryption, DLP policies, and access controls while managing data classification and ensuring secure data handling practices across the organization.',
  skills:['Data Encryption','DLP Tools','Data Classification','Backup Management','Access Control Policies'],
  solutions:['Encryption','Data loss prevention (DLP)','Secure backups','Access control policies'],
  bullets:['Protect customer data','Secure financial records','Safeguard intellectual property','Protect business documents'],
  note:'Organizations must implement strong data security policies to protect confidential information and maintain customer trust.'},
 {id:'svc-7',num:'07',icon:'📡',iconClassName:'ic-pink',title:'Security Operations Center (SOC) Services',
  def:'A Security Operations Center (SOC) is a centralized team responsible for monitoring and responding to cybersecurity threats in real time. SOC teams use advanced tools to detect suspicious activities and prevent cyberattacks.',
  role:'SOC Analyst (L1/L2/L3) / SOC Manager',
  resp:'Monitor SIEM alerts, investigate security events, escalate incidents, perform threat hunting, and coordinate incident response around the clock, 24/7.',
  skills:['SIEM Platforms','Threat Detection','Incident Triage','Log Analysis','Threat Hunting'],
  solutions:['24/7 threat monitoring','Security event analysis','Incident detection','Threat response','Security reporting'],
  bullets:['Provide continuous 24/7 protection','Detect suspicious activities in real time','Rapidly respond to cyber threats','Produce security reporting'],
  note:'SOC services provide continuous protection and rapid response to cyber threats.'},
 {id:'svc-8',num:'08',icon:'🔍',iconClassName:'ic-green',title:'Vulnerability Assessment',
  def:'A vulnerability assessment identifies weaknesses in an organization\'s IT infrastructure. Security professionals scan systems, applications, and networks to detect security gaps that attackers could exploit.',
  role:'Vulnerability Analyst / Security Assessor',
  resp:'Conduct automated and manual scans, analyze risk severity, produce remediation reports, and track vulnerability resolution timelines across the organization.',
  skills:['Nessus / Qualys / Rapid7','Risk Scoring (CVSS)','Network Scanning','Remediation Planning','Reporting'],
  solutions:['Automated vulnerability scanning','Risk analysis','Security recommendations','Remediation planning'],
  bullets:['Identify exploitable security gaps','Analyze and score risk levels','Provide actionable security recommendations','Plan and track remediation'],
  note:'Regular vulnerability assessments help organizations proactively strengthen their security posture.'},
 {id:'svc-9',num:'09',icon:'⚔️',iconClassName:'ic-gold',title:'Penetration Testing (Ethical Hacking)',
  def:'Penetration testing simulates real-world cyberattacks to identify vulnerabilities in systems and networks. Ethical hackers attempt to exploit security weaknesses just like a malicious attacker would.',
  role:'Penetration Tester / Red Team Operator',
  resp:'Conduct authorized attacks on networks, applications, and social engineering vectors, then document findings with risk ratings and remediation steps.',
  skills:['Metasploit / Burp Suite / Kali','Exploit Development','Social Engineering','Web App Testing','Report Writing'],
  solutions:['Network penetration testing','Web application testing','Wireless network testing','Social engineering tests'],
  bullets:['Simulate real-world attacker techniques','Test network and application defenses','Identify vulnerabilities before attackers do','Fix vulnerabilities quickly'],
  note:'The goal is to identify vulnerabilities before attackers do and fix them quickly.'},
 {id:'svc-10',num:'10',icon:'🏢',iconClassName:'ic-purple',title:'Managed Security Services (MSSP)',
  def:'Managed Security Service Providers (MSSPs) offer outsourced cybersecurity services to businesses. Instead of managing security internally, organizations rely on external security experts to monitor and protect their systems.',
  role:'MSSP Security Analyst / Client Success Manager',
  resp:'Monitor client environments, manage security tools, apply patches, produce compliance reports, and serve as an extension of the client\'s internal security team.',
  skills:['Multi-tenant SIEM','Firewall Management','Compliance Reporting','Patching & Updates','Client SLA Management'],
  solutions:['Security monitoring','Threat detection','Firewall management','Security updates and patching','Compliance monitoring'],
  bullets:['Provide enterprise-level security expertise','Deliver 24/7 managed monitoring','Handle security updates and patching','Offer compliance monitoring services'],
  note:'MSSPs provide enterprise-level security expertise without the need for a large internal security team.'},
 {id:'svc-11',num:'11',icon:'🚨',iconClassName:'ic-pink',title:'Incident Response Services',
  def:'Incident response services help organizations manage cybersecurity incidents and data breaches. When a cyberattack occurs, rapid response is critical to minimize damage.',
  role:'Incident Responder / DFIR Analyst',
  resp:'Lead incident containment, conduct digital forensics, coordinate recovery efforts, communicate with stakeholders, and produce post-incident analysis reports.',
  skills:['Digital Forensics','Malware Analysis','Chain of Custody','Recovery Planning','Executive Communication'],
  solutions:['Threat containment','Attack investigation','Malware removal','System recovery','Post-incident analysis'],
  bullets:['Contain active threats immediately','Investigate attack vectors forensically','Remove malware and restore systems','Conduct post-incident analysis'],
  note:'Having an incident response plan ensures businesses can recover quickly from cyberattacks.'},
 {id:'svc-12',num:'12',icon:'🌐',iconClassName:'ic-blue',title:'Threat Intelligence',
  def:'Threat intelligence involves collecting and analyzing data about emerging cyber threats. Security teams use threat intelligence to understand attacker behavior and prepare defenses against new threats.',
  role:'Threat Intelligence Analyst',
  resp:'Monitor threat actor TTPs, analyze malware samples, track dark web activity, and produce actionable intelligence reports for security teams.',
  skills:['MITRE ATT&CK Framework','Dark Web Monitoring','OSINT Techniques','Malware Analysis','IOC Management'],
  solutions:['Global threat databases','Dark web monitoring','Security research reports','Malware analysis'],
  bullets:['Anticipate attacks before they occur','Understand attacker behavior','Monitor dark web for threat data','Strengthen defenses proactively'],
  note:'By analyzing threat intelligence, organizations can anticipate attacks and strengthen their defenses.'},
 {id:'svc-13',num:'13',icon:'⚖️',iconClassName:'ic-green',title:'Risk Assessment and Management',
  def:'Cybersecurity risk assessment evaluates the potential risks that could impact an organization\'s digital infrastructure. Risk management involves identifying threats, analyzing vulnerabilities, and implementing security controls.',
  role:'Cybersecurity Risk Manager / GRC Analyst',
  resp:'Identify and score risks, map threats to assets, recommend controls, maintain risk registers, and report to executive leadership on organizational risk posture.',
  skills:['Risk Frameworks (NIST, ISO 27005)','Threat Modeling','Risk Scoring','Control Mapping','Executive Reporting'],
  solutions:['Asset identification','Threat analysis','Risk scoring','Security control implementation'],
  bullets:['Identify organizational assets and threats','Analyze vulnerabilities systematically','Score and prioritize risks','Implement appropriate security controls'],
  note:'Organizations that regularly perform risk assessments can reduce the likelihood of security incidents.'},
 {id:'svc-14',num:'14',icon:'📋',iconClassName:'ic-gold',title:'Compliance and Regulatory Security',
  def:'Many industries must comply with strict cybersecurity regulations. Compliance security ensures organizations meet industry standards and legal requirements including GDPR, HIPAA, PCI DSS, and ISO 27001.',
  role:'Compliance Officer / GRC Specialist',
  resp:'Interpret regulatory requirements, design compliant security programs, conduct internal audits, and manage third-party assessments and compliance monitoring.',
  skills:['GDPR / HIPAA / PCI DSS','Audit Management','Policy Development','Gap Analysis','Third-party Risk'],
  solutions:['Security audits','Risk assessments','Policy implementation','Compliance monitoring'],
  bullets:['Meet GDPR requirements','Maintain HIPAA compliance','Achieve PCI DSS certification','Implement ISO 27001 standards'],
  note:'Maintaining regulatory compliance helps organizations avoid penalties and protect sensitive data.'},
 {id:'svc-15',num:'15',icon:'📧',iconClassName:'ic-purple',title:'Email Security',
  def:'Email remains one of the most common attack vectors used by cybercriminals. Phishing emails, malware attachments, and business email compromise attacks can cause serious financial damage.',
  role:'Email Security Administrator',
  resp:'Configure and manage email filtering platforms, conduct phishing simulations, investigate suspicious emails, and train users on email threat awareness.',
  skills:['Secure Email Gateways','Anti-Phishing Tools','DMARC/DKIM/SPF','Email Encryption','Phishing Simulation'],
  solutions:['Spam filtering','Phishing detection','Malware scanning','Email encryption'],
  bullets:['Block phishing and malware emails','Prevent business email compromise','Protect employees from malicious emails','Prevent data breaches via email'],
  note:'These solutions help protect employees from malicious emails and prevent data breaches.'},
 {id:'svc-16',num:'16',icon:'🌍',iconClassName:'ic-blue',title:'Web Security',
  def:'Web security protects websites, web applications, and online services from cyber threats. Attackers often target websites with malware injections, Cross-site scripting (XSS), SQL injection attacks, and Distributed Denial of Service (DDoS).',
  role:'Web Security Engineer',
  resp:'Deploy WAFs, monitor web traffic, manage SSL certificates, conduct web application security testing, and respond to web-based incidents.',
  skills:['Web Application Firewalls (WAF)','DDoS Mitigation','SSL/TLS Management','OWASP Testing','CDN Security'],
  solutions:['Web Application Firewalls (WAF)','Secure coding practices','SSL encryption','Website monitoring'],
  bullets:['Block DDoS and injection attacks','Prevent malware injections','Enforce SSL/HTTPS encryption','Protect both businesses and website visitors'],
  note:'Strong web security protects both businesses and website visitors.'},
 {id:'svc-17',num:'17',icon:'♻️',iconClassName:'ic-pink',title:'Disaster Recovery and Business Continuity',
  def:'Cyberattacks, natural disasters, or system failures can disrupt business operations. Disaster recovery and business continuity planning ensures that organizations can quickly restore systems and continue operations after a disruption.',
  role:'DR/BC Planner / Business Continuity Manager',
  resp:'Design and test recovery plans, manage backup strategies, define RTOs and RPOs, and conduct business impact analyses to minimize downtime.',
  skills:['Backup Technologies','RTO/RPO Planning','DR Testing','Business Impact Analysis','Cloud Recovery'],
  solutions:['Data backups','Disaster recovery planning','Redundant infrastructure','System restoration procedures'],
  bullets:['Minimize downtime after incidents','Protect data with automated backups','Enable rapid system restoration','Maintain redundant infrastructure'],
  note:'A well-designed disaster recovery plan minimizes downtime and financial losses.'},
 {id:'svc-18',num:'18',icon:'📱',iconClassName:'ic-green',title:'IoT Security',
  def:'Internet of Things (IoT) devices such as smart cameras, sensors, and industrial equipment are increasingly used in modern organizations. However, many IoT devices lack strong security protections. IoT security focuses on protecting connected devices from cyber threats.',
  role:'IoT Security Engineer',
  resp:'Audit connected device inventories, enforce network segmentation, manage firmware updates, and monitor IoT traffic for anomalous behavior.',
  skills:['IoT Device Inventory','Network Segmentation','Firmware Analysis','Protocol Security','Device Authentication'],
  solutions:['Device authentication','Secure firmware updates','Network segmentation','Continuous device monitoring'],
  bullets:['Authenticate all connected devices','Enforce secure firmware update processes','Segment IoT from critical networks','Monitor device communications continuously'],
  note:'Securing IoT devices is critical to preventing unauthorized access to enterprise networks.'},
 {id:'svc-19',num:'19',icon:'📲',iconClassName:'ic-gold',title:'Mobile Security',
  def:'Mobile devices are widely used for business communication and remote work. Mobile security protects smartphones and tablets from malware, data theft, and unauthorized access.',
  role:'Mobile Security Analyst',
  resp:'Implement and manage MDM platforms, enforce mobile security policies, conduct mobile app security testing, and respond to mobile device incidents.',
  skills:['MDM Platforms (Intune, Jamf)','Mobile Threat Defense','App Security Testing','Device Encryption','BYOD Policies'],
  solutions:['Mobile device management (MDM)','Mobile threat defense','App security controls','Device encryption'],
  bullets:['Enforce mobile device management policies','Detect and block mobile malware','Secure BYOD environments','Enable remote wipe capabilities'],
  note:'Strong mobile security policies ensure employees can work safely from any location.'},
 {id:'svc-20',num:'20',icon:'🎓',iconClassName:'ic-purple',title:'Security Awareness Training',
  def:'Human error is one of the leading causes of cybersecurity incidents. Security awareness training educates employees about cyber threats and best security practices.',
  role:'Security Awareness Program Manager',
  resp:'Develop and deliver training curricula, run phishing simulations, measure security culture metrics, and report on employee risk reduction over time.',
  skills:['Training Platform Management','Phishing Simulation','Content Development','KPI Tracking','Executive Reporting'],
  solutions:['Phishing awareness','Password security','Social engineering attacks awareness','Safe internet practices'],
  bullets:['Educate employees on cyber threats','Teach password security best practices','Train staff on social engineering awareness','Promote safe internet practices'],
  note:'Educated employees become the first line of defense against cyber threats.'}
];




    export const industryDemand = [
        ['2021', '$184.9B', '12.4%', 'Remote work surge, ransomware', '↑ Rising'],
        ['2022', '$213.6B', '15.5%', 'Cloud adoption, nation-state attacks', '↑ Rising'],
        ['2023', '$248.3B', '16.2%', 'AI-driven threats, data regulations', '↑ Strong'],
        ['2024', '$289.1B', '16.4%', 'GenAI attacks, critical infra targeting', '↑ Accelerating'],
        ['2025', '$345.7B', '19.6%', 'Zero-trust adoption, IoT proliferation', '↑ Peak Growth'],
      ];
      
      export const countryDemand = [
        ['🇺🇸 United States', '$76.2B', '$88.4B', '$104.1B', '$121.3B', '$145.0B'],
        ['🇬🇧 United Kingdom', '$11.4B', '$13.2B', '$15.8B', '$18.6B', '$22.1B'],
        ['🇩🇪 Germany', '$10.8B', '$12.6B', '$14.9B', '$17.3B', '$20.4B'],
        ['🇯🇵 Japan', '$9.3B', '$10.8B', '$13.1B', '$15.7B', '$18.9B'],
        ['🇨🇳 China', '$9.6B', '$11.9B', '$14.4B', '$17.1B', '$20.5B'],
        ['🇮🇳 India', '$3.1B', '$4.2B', '$5.9B', '$7.8B', '$10.4B'],
        ['🇦🇺 Australia', '$4.2B', '$5.0B', '$6.1B', '$7.4B', '$8.9B'],
        ['🇸🇬 Singapore', '$1.8B', '$2.2B', '$2.8B', '$3.5B', '$4.2B'],
      ];
      
      export const globalUsers = [
        ['2021', '4.2M', '180,000', '1.4M', '2.7M shortage'],
        ['2022', '4.7M', '210,000', '1.9M', '3.1M shortage'],
        ['2023', '5.1M', '248,000', '2.6M', '3.4M shortage'],
        ['2024', '5.6M', '287,000', '3.4M', '3.5M shortage'],
        ['2025', '6.1M', '340,000', '4.5M', '3.5M shortage'],
      ];

      export const caseStudies: CaseStudy[] = [
        {num:'01',company:'Global Bank Corp',sector:'Financial Services',challenge:'Suffered a $47M ransomware attack encrypting core banking systems across 3 countries.',solution:'Deployed MSSP-managed SOC with 24/7 EDR monitoring and incident response retainer. Implemented network segmentation and offline backup strategy.',result:'Recovery in 18 hours vs. industry average of 6 days.',resultVal:'18hr'},
        {num:'02',company:'HealthNet Systems',sector:'Healthcare',challenge:'HIPAA audit revealed 140+ unencrypted patient record databases exposed for 11 months.',solution:'Rolled out data security program with DLP, encryption at rest/in transit, and role-based access controls across 12 hospital sites.',result:'Achieved full HIPAA compliance and avoided $8.2M in potential fines.',resultVal:'$8.2M'},
        {num:'03',company:'RetailMax Group',sector:'Retail / E-Commerce',challenge:'Web application breached via SQL injection, exposing 2.4M customer payment records.',solution:'Deployed WAF, implemented OWASP-aligned secure coding standards, and conducted quarterly penetration testing.',result:'Zero web application breaches in 24 months post-implementation.',resultVal:'0 Breaches'},
        {num:'04',company:'CloudFirst Startup',sector:'SaaS / Technology',challenge:'AWS misconfiguration exposed proprietary source code and customer credentials publicly for 72 hours.',solution:'Engaged cloud security audit, deployed CSPM tooling, and enforced IAM least-privilege policies across all cloud accounts.',result:'Reduced cloud misconfigurations by 94% in first 90 days.',resultVal:'94%'},
        {num:'05',company:'EnergyCore Ltd',sector:'Critical Infrastructure',challenge:'ICS/SCADA network targeted by nation-state actor attempting to disrupt power grid operations.',solution:'Implemented OT/IT network segmentation, deployed IoT security monitoring, and established threat intelligence sharing with government CERT.',result:'Detected and blocked attack within 4 minutes, preventing operational disruption.',resultVal:'4 Min'},
        {num:'06',company:'LegalEdge LLP',sector:'Legal Services',challenge:'Business email compromise (BEC) scam resulted in $1.2M wire fraud transfer to attacker.',solution:'Deployed advanced email security gateway with AI-based BEC detection, enforced MFA, and ran mandatory phishing simulation training.',result:'BEC attempt detection rate improved from 0% to 99.3%.',resultVal:'99.3%'},
        {num:'07',company:'University of TechPlex',sector:'Higher Education',challenge:'Ransomware encrypted 40TB of student research data, threatening loss of 3 years of grant-funded research.',solution:'Implemented disaster recovery plan with immutable cloud backups, endpoint detection, and network segmentation for research labs.',result:'Full data recovery in 6 hours with zero research data lost.',resultVal:'100%'},
        {num:'08',company:'PharmaCo International',sector:'Pharmaceuticals',challenge:'Insider threat exfiltrated proprietary drug formula data via USB devices over 8 months undetected.',solution:'Deployed DLP with USB monitoring, implemented user entity behavior analytics (UEBA), and revised data classification policy.',result:'Insider threat detection time reduced from 8 months to 2 hours.',resultVal:'2hrs'},
        {num:'09',company:'SupplyNet Logistics',sector:'Supply Chain',challenge:'Third-party vendor compromise created backdoor into core logistics platform affecting 600+ enterprise clients.',solution:'Established vendor risk management program, deployed API security gateway, and implemented zero-trust network access.',result:'Third-party risk incidents reduced by 87% within 12 months.',resultVal:'87%'},
        {num:'10',company:'SmartCity Municipality',sector:'Government',challenge:'City\'s smart infrastructure — traffic systems, water controls — vulnerable to IoT-based attacks with no monitoring.',solution:'Deployed IoT security platform with device inventory, anomaly detection, and municipal SOC with dedicated OT analysts.',result:'Identified and remediated 1,200+ vulnerable devices; zero public safety incidents.',resultVal:'1,200+'}
      ];
        

    
    export const faqs: Faq[] = [
      {q:'What are cybersecurity services?',a:'Cybersecurity services are professional solutions designed to protect systems, networks, applications, and data from cyber threats such as hacking, malware, and data breaches. They encompass everything from network and endpoint protection to threat intelligence, incident response, and employee security awareness training.'},
      {q:'Why are cybersecurity services important?',a:'Cybersecurity services help organizations protect sensitive data, prevent cyberattacks, maintain regulatory compliance, and ensure business continuity. As digital infrastructure grows, the attack surface expands — making professional cybersecurity services a critical investment for organizations of every size.'},
      {q:'What is the most important cybersecurity service?',a:'There is no single most important service — effective cybersecurity requires layered defense. However, key foundational solutions include network security, endpoint protection, cloud security, and continuous threat monitoring through a SOC. Organizations should start with a risk assessment to identify their highest-priority gaps.'},
      {q:'Do small businesses need cybersecurity services?',a:'Yes. Small businesses are often targeted by cybercriminals precisely because they typically have weaker security systems. 43% of all cyberattacks target SMBs. Affordable managed security services (MSSPs) and cloud-based security tools now make enterprise-grade protection accessible to businesses of all sizes.'},
      {q:'How do managed security services work?',a:'Managed Security Service Providers (MSSPs) monitor and manage cybersecurity systems on behalf of organizations, offering continuous protection and expert support. They provide 24/7 threat monitoring, firewall management, patch updates, incident response, and compliance reporting — acting as an outsourced security team.'},
      {q:'What is the difference between vulnerability assessment and penetration testing?',a:'A vulnerability assessment identifies and catalogs security weaknesses using automated scanning tools. Penetration testing goes further — certified ethical hackers actively attempt to exploit those weaknesses to demonstrate real-world attack impact and validate whether existing defenses would actually stop an attacker.'},
      {q:'What are the most common cybersecurity regulations businesses must comply with?',a:'The most common regulations include GDPR (European data privacy), HIPAA (US healthcare data), PCI DSS (payment card data), and ISO 27001 (international information security management). Compliance requirements vary by industry, geography, and the type of data an organization handles.'},
      {q:'How does a Security Operations Center (SOC) work?',a:'A SOC is a centralized team that monitors an organization\'s entire IT environment 24/7 using SIEM platforms and threat intelligence feeds. SOC analysts triage security alerts, investigate incidents, and coordinate response activities. SOCs can be built internally, co-managed, or fully outsourced to an MSSP.'},
      {q:'What is threat intelligence and how is it used?',a:'Threat intelligence involves collecting and analyzing data about emerging cyber threats, attacker behavior, and active campaigns from sources including global threat databases, dark web monitoring, and security research. It helps security teams anticipate attacks, update defenses proactively, and understand the tactics of threat actors targeting their industry.'},
      {q:'What role does security awareness training play in cybersecurity?',a:'Human error is one of the leading causes of cybersecurity incidents — accounting for over 80% of breaches. Security awareness training educates employees on phishing, password hygiene, social engineering, and safe internet practices. Trained employees become an active human firewall — the first line of defense against cyber threats.'}
    ];
    