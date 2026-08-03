import type { Profile, JourneyItem, ResearchArea, Publication, Course, NewsItem } from '../types'

export const profile: Profile = {
  name: 'Dr. Susil Kumar Mohanty',
  title: 'Assistant Professor',
  department: 'Computer Science & Engineering',
  institution: 'Indian Institute of Technology (IIT) Jodhpur',
  email: 'susilmohanty@iitj.ac.in',
  phone: '0291-280-1281',
  officeRoom: 'Room 228, 1st Floor, CSE Department',
  address: 'NH 62, Nagaur Road, Karwar, Jodhpur, Rajasthan, India 342030',
  researchTagline: 'Securing decentralized systems through cryptographic primitives',
  about: `Dr. Susil Kumar Mohanty is currently working as an Assistant Professor in the Department of Computer Science and Engineering at Indian Institute of Technology (IIT) Jodhpur. Before joining IIT Jodhpur, he was a Post-doctoral Researcher at the Faculty of Mathematics, Informatics, and Mechanics (MIM), University of Warsaw (UW), Poland, where he worked in the Cryptography and Blockchain Group hosted by Prof. Stefan Dziembowski. He completed his Ph.D. in the Department of Computer Science and Engineering at the Indian Institute of Technology (IIT) Patna, where he had the privilege of working under the supervision of Prof. Somanath Tripathy in the SLIP: Security Lab @ IIT Patna.`,
  socialLinks: [
    {
      platform: 'google-scholar',
      label: 'Google Scholar',
      url: 'https://scholar.google.com/citations?hl=en&user=JBrbQ5sAAAAJ&view_op=list_works',
    },
    {
      platform: 'researchgate',
      label: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/Susil-Mohanty',
    },
    {
      platform: 'dblp',
      label: 'DBLP',
      url: 'https://dblp.org/search?q=Susil+Kumar+Mohanty',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/susilmohanty11/',
    },
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/susil-mohanty',
    },
  ],
  // __DEPLOY_BASE__ (not import.meta.env.BASE_URL, which singlefile forces to './') gives
  // an absolute path that resolves correctly from any route, e.g. /~susilmohanty/cv.pdf.
  cvUrl: `${__DEPLOY_BASE__}cv.pdf`,
  photoUrl: `${__DEPLOY_BASE__}assets/images/profile.jpg`,
}

export const journeyItems: JourneyItem[] = [
  {
    id: 'asst-prof-iitj',
    type: 'experience',
    title: 'Assistant Professor',
    institution: 'Indian Institute of Technology (IIT) Jodhpur',
    period: { start: 2025, end: 'present' },
    location: 'Jodhpur, Rajasthan, India',
    description: 'Department of Computer Science & Engineering, Room 228, 1st Floor',
  },
  {
    id: 'postdoc-warsaw',
    type: 'experience',
    title: 'Post-doctoral Researcher',
    institution: 'University of Warsaw',
    period: { start: 2024, end: 2025 },
    location: 'Warsaw, Poland',
    supervisor: 'Prof. Stefan Dziembowski',
    grant: 'ERC Advanced Grant — PROCONTRA: Smart-Contract Protocols, Theory for Applications',
    description: 'Cryptography and Blockchain Group, Faculty of Mathematics, Informatics, and Mechanics',
  },
  {
    id: 'phd-iitpatna',
    type: 'education',
    title: 'Ph.D. in Computer Science & Engineering',
    institution: 'Indian Institute of Technology (IIT) Patna',
    period: { start: 2019, end: 2023 },
    location: 'Patna, India',
    supervisor: 'Prof. Somanath Tripathy',
    thesis: 'Design and Analysis of Secure Off-chain Transactions for Blockchain-based Payment Channel Networks',
    description: 'SLIP: Security Lab @ IIT Patna',
  },
  {
    id: 'project-iitkanpur',
    type: 'experience',
    title: 'Project Associate',
    institution: 'Indian Institute of Technology (IIT) Kanpur',
    period: { start: 2018, end: 2018 },
    location: 'Kanpur, India',
    supervisor: 'Prof. Laxmidhar Behera',
    description: 'Intelligent System Lab, EE Department — MHRD SPO/MHRD/EE/2016150',
  },
  {
    id: 'mtech-uoh',
    type: 'education',
    title: 'M.Tech. in Artificial Intelligence',
    institution: 'University of Hyderabad',
    period: { start: 2016, end: 2018 },
    location: 'Hyderabad, India',
    supervisor: 'Prof. Siba Kumar Udgata',
    thesis: 'Interference Minimization in Wireless Sensor Networks using SINR/Physical Model',
    rank: 'Rank 2',
    description: 'WiSeComLab @ University of Hyderabad',
  },
  {
    id: 'ms-utkal',
    type: 'education',
    title: 'M.S. in Computer Science',
    institution: 'Utkal University',
    period: { start: 2013, end: 2015 },
    location: 'Bhubaneswar, India',
    supervisor: 'Dr. B. N. Bhramar Ray',
    thesis: 'Efficient Territory-Spanning Graph for Obstacle Avoiding Rectilinear Steiner Minimal Tree Construction',
    rank: 'Rank 1',
  },
  {
    id: 'bs-angul',
    type: 'education',
    title: 'B.S. in Computer Science',
    institution: 'Government College (Autonomous), Angul',
    period: { start: 2010, end: 2013 },
    location: 'Angul, Odisha, India',
    rank: 'Rank 1',
    description: 'Project: Angul Autonomous College Website Design',
  },
]

export const researchAreas: ResearchArea[] = [
  {
    id: 'pcn',
    title: 'Payment Channel Networks',
    description:
      'Designing efficient, secure, and privacy-preserving off-chain transaction protocols for blockchain payment channel networks, including defenses against attacks like wormhole and channel exhaustion.',
    tags: ['Blockchain', 'Off-chain', 'Layer-2', 'Privacy'],
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Off-chain Technologies',
    description:
      'Research into distributed ledger scaling solutions, cross-chain communication mechanisms, data availability, and the foundational security properties of blockchain infrastructure.',
    tags: ['DLT', 'Scalability', 'Cross-chain', 'Smart Contracts'],
  },
  {
    id: 'siov',
    title: 'Social Internet of Vehicles',
    description:
      'Leveraging blockchain and cryptographic primitives to enable secure, privacy-preserving data sharing and reliable communication in social vehicular networks.',
    tags: ['IoV', 'Privacy', 'V2X', 'Decentralized'],
  },
  {
    id: 'energy',
    title: 'Decentralized Energy Trading',
    description:
      'Building trustless peer-to-peer local energy market mechanisms using smart contracts and blockchain, enabling efficient and transparent energy exchange without central intermediaries.',
    tags: ['LEM', 'Smart Grid', 'P2P', 'Smart Contracts'],
  },
  {
    id: 'zkp',
    title: 'Applied Zero-Knowledge Proofs',
    description:
      'Applying zero-knowledge proof systems to construct privacy-preserving protocols across decentralized applications, from payment channels to vehicle data sharing.',
    tags: ['ZKP', 'Cryptography', 'Privacy', 'SNARK'],
  },
  {
    id: 'fed-learning',
    title: 'Decentralized Federated Learning',
    description:
      'Designing secure, privacy-preserving decentralized machine learning systems that operate without a central coordinator, using blockchain for coordination and incentive alignment.',
    tags: ['FL', 'ML', 'Decentralized AI', 'Privacy'],
  },
]

export const publications: Publication[] = [
  // ── CRYPTO 2026 – Featured ────────────────────────────────────────────────
  {
    id: 'beholder-crypto-2026',
    title: 'Beholder Signatures',
    authors: [
      'Stefan Dziembowski',
      'Sebastian Faust',
      'Paweł Kędzior',
      'Marcin Mielniczuk',
      'Susil Kumar Mohanty',
      'Krzysztof Pietrzak',
    ],
    venue: 'CRYPTO 2026',
    year: 2025,
    type: 'conference',
    featured: true,
    pdfUrl: 'https://eprint.iacr.org/2025/1900',
    abstract:
      'We introduce Beholder Signatures, a new cryptographic primitive designed for use in blockchain and smart-contract settings.',
  },

  // ── Latest Pre-Print ──────────────────────────────────────────────────────
  {
    id: 'trishieldrag-arxiv-2026',
    title:
      'TriShieldRAG: A Three-Ring Defense-in-Depth Framework Against Knowledge Corruption in Retrieval-Augmented Generation',
    authors: [
      'Susil Kumar Mohanty',
      'Rohit Patel',
      'Kosuru Yuvaraj',
      'Jeenal Chaudhary',
      'Disha Singhania',
    ],
    venue: 'arXiv Pre-Print',
    year: 2026,
    type: 'preprint',
    pdfUrl: 'https://arxiv.org/abs/2607.23838',
    abstract:
      'A three-ring defense-in-depth framework that combines an Ingest Guard, a provenance-weighted Retrieval Scorer, and a Cross-LLM Consensus stage to reduce poisoning attack success in Retrieval-Augmented Generation from roughly 91% to roughly 13% while preserving accuracy on benign queries.',
  },

  // ── Journals ──────────────────────────────────────────────────────────────
  {
    id: 'flexichain-tops-2024',
    title: 'Flexichain: Flexible Payment Channel Networks to Defend Against Channel Exhaustion Attack',
    authors: ['Susil Kumar Mohanty', 'Somanath Tripathy'],
    venue: 'ACM Transactions on Privacy and Security (ACM TOPS)',
    year: 2024,
    type: 'journal',
    doi: 'https://doi.org/10.1145/3687476',
    metrics: 'SCIE, SCOPUS Q1, Impact Factor 3.0, h5-index 29',
  },
  {
    id: 'siovchain-tits-2022',
    title: 'SIoVChain: Time-Lock Contract based Privacy-Preserving Data Sharing in Social Internet of Vehicles',
    authors: ['Susil Kumar Mohanty', 'Somanath Tripathy'],
    venue: 'IEEE Transactions on Intelligent Transportation Systems (IEEE T-ITS), Vol. 23, No. 12, pp. 24071–24082',
    year: 2022,
    type: 'journal',
    doi: 'https://doi.org/10.1109/TITS.2022.3192566',
    metrics: 'SCIE, Q1, Impact Factor 8.4, h5-index 163',
  },
  {
    id: 'nhtlc-cs-2021',
    title: 'n-HTLC: Neo Hashed Time-Lock Commitment to Defend Against Wormhole Attack in Payment Channel Networks',
    authors: ['Susil Kumar Mohanty', 'Somanath Tripathy'],
    venue: 'Computers & Security (Elsevier), Vol. 106, pp. 102291/1–20',
    year: 2021,
    type: 'journal',
    doi: 'https://doi.org/10.1016/j.cose.2021.102291',
    metrics: 'SCIE, Q1, Impact Factor 5.4, h5-index 112',
  },
  {
    id: 'satpas-eaai-2021',
    title: 'SATPAS: SINR-based Adaptive Transmission Power Assignment with Scheduling in WSNs',
    authors: ['Susil Kumar Mohanty', 'Siba Kumar Udgata'],
    venue: 'Engineering Applications of Artificial Intelligence (Elsevier EAAI), Vol. 103, Article 104313',
    year: 2021,
    type: 'journal',
    doi: 'https://doi.org/10.1016/j.engappai.2021.104313',
    metrics: 'SCIE, Q1, Impact Factor 8.0, h5-index 117',
  },
  {
    id: 'interference-eaai-2020',
    title: 'Minimizing Maximum Receiver Interference in Wireless Sensor Networks using Probabilistic Interference Model',
    authors: ['Susil Kumar Mohanty', 'Siba Kumar Udgata'],
    venue: 'Engineering Applications of Artificial Intelligence (Elsevier EAAI), Vol. 91, Article 103563',
    year: 2020,
    type: 'journal',
    doi: 'https://doi.org/10.1016/j.engappai.2020.103563',
    metrics: 'SCIE, Q1, Impact Factor 8.0, h5-index 117',
  },

  // ── Conferences ───────────────────────────────────────────────────────────
  {
    id: 'flexipcn-fc-2023',
    title: 'FlexiPCN: Flexible Payment Channel Networks',
    authors: ['Susil Kumar Mohanty', 'Somanath Tripathy'],
    venue: 'Financial Cryptography and Data Security (FC 2023), Workshop on Trusted Smart Contracts (WTSC), Bol, Brač, Croatia — Lecture Notes in Computer Science, Vol. 13953, Springer',
    year: 2023,
    type: 'conference',
    doi: 'https://doi.org/10.1007/978-3-031-48806-1_26',
  },
  {
    id: 'musigdt-globecom-2022',
    title: 'MuSigRDT: MultiSig Contract based Reliable Data Transmission in Social Internet of Vehicle',
    authors: ['Badavath Shravan Naik', 'Somanath Tripathy', 'Susil Kumar Mohanty'],
    venue: 'IEEE Global Communications Conference (IEEE GLOBECOM), Rio de Janeiro, Brazil, pp. 1763–1768',
    year: 2022,
    type: 'conference',
    doi: 'https://doi.org/10.1109/GLOBECOM48099.2022.10001443',
  },
  {
    id: 'mappcn-fc-2020',
    title: 'MAPPCN: Multi-hop, Anonymous and Privacy-Preserving Payment Channel Network',
    authors: ['Somanath Tripathy', 'Susil Kumar Mohanty'],
    venue: 'Financial Cryptography and Data Security (FC 2020), Workshop on Trusted Smart Contracts (WTSC), Kota Kinabalu, Malaysia — Lecture Notes in Computer Science, Vol. 12063, Springer',
    year: 2020,
    type: 'conference',
    doi: 'https://doi.org/10.1007/978-3-030-54455-3_34',
  },
  {
    id: 'gnsvf-csi-2020',
    title: 'G-NSVF: A Greedy Algorithm for Non-slicing VLSI Floorplanning',
    authors: ['B. N. Bhramar Ray', 'Sony Singdha Sahoo', 'Susil Kumar Mohanty'],
    venue: 'Digital Democracy — IT for Change, Computer Society of India (CSI 2020) — Springer CCIS, Vol. 1372',
    year: 2020,
    type: 'conference',
    doi: 'https://doi.org/10.1007/978-981-16-2723-1_6',
  },
  {
    id: 'wirelength-ises-2018',
    title: 'An Iterative Concave-Convex Wirelength Model for Analytical Placement',
    authors: ['B. N. Bhramar Ray', 'Sony Singdha Sahoo', 'Rasheswari Bhramar Ray', 'Susil Kumar Mohanty', 'Debabrat Sethy'],
    venue: 'IEEE International Symposium on Smart Electronic Systems (iSES), Hyderabad, India, pp. 64–69',
    year: 2018,
    type: 'conference',
    doi: 'https://doi.org/10.1109/iSES.2018.00023',
  },
  {
    id: 'hpwl-gaussian-icit-2017',
    title: 'HPWL Formulation for Analytical Placement using Gaussian Error Function',
    authors: ['B. N. Bhramar Ray', 'Susil Kumar Mohanty', 'Debabrat Sethy', 'Rasheswari Bhramar Ray'],
    venue: 'International Conference on Information Technology (ICIT 2017), Bhubaneswar, India, pp. 56–61',
    year: 2017,
    type: 'conference',
    doi: 'https://doi.org/10.1109/ICIT.2017.34',
  },
  {
    id: 'hpwl-optimized-icit-2015',
    title: 'An Optimized HPWL Model for VLSI Analytical Placement',
    authors: ['B. N. Bhramar Ray', 'S. Das', 'K. Hazra', 'N. Patra', 'Susil Kumar Mohanty'],
    venue: 'International Conference on Information Technology (ICIT 2015), Bhubaneswar, India, pp. 7–12',
    year: 2015,
    type: 'conference',
    doi: 'https://doi.org/10.1109/ICIT.2015.32',
  },

  // ── Preprints ─────────────────────────────────────────────────────────────
  {
    id: 'beholder-eprint-2025',
    title: 'Beholder Signatures',
    authors: [
      'Stefan Dziembowski',
      'Sebastian Faust',
      'Paweł Kędzior',
      'Marcin Mielniczuk',
      'Susil Kumar Mohanty',
      'Krzysztof Pietrzak',
    ],
    venue: 'Cryptology ePrint Archive',
    year: 2025,
    type: 'preprint',
    pdfUrl: 'https://eprint.iacr.org/2025/1900',
  },
  {
    id: 'ucr-eprint-2025',
    title: 'Universal Channel Rebalancing: Flexible Coin Shifting in Payment Channel Networks',
    authors: ['Stefan Dziembowski', 'Shahriar Ebrahimi', 'Omkar Gavhane', 'Susil Kumar Mohanty'],
    venue: 'Cryptology ePrint Archive',
    year: 2025,
    type: 'preprint',
    pdfUrl: 'https://eprint.iacr.org/2025/1023',
  },
  {
    id: 'trafficproof-eprint-2025',
    title: 'TrafficProof: Privacy-Preserving Reliable Traffic Information Sharing in Social Internet of Vehicles',
    authors: ['Stefan Dziembowski', 'Shahriar Ebrahimi', 'Parisa Hassanizadeh', 'Susil Kumar Mohanty'],
    venue: 'Cryptology ePrint Archive',
    year: 2025,
    type: 'preprint',
    pdfUrl: 'https://eprint.iacr.org/2025/1062',
  },
]

export const news: NewsItem[] = [
  {
    id: 'crypto-2026-accepted',
    text: 'One of our papers, Beholder Signatures, has been accepted to CRYPTO 2026.',
    featured: true,
  },
  {
    id: 'army-konark-talk',
    date: '10 June 2026',
    text: 'Gave a talk on Data Privacy and Blockchain for Defense Applications at the Army Konark Corps, Jodhpur, for senior Army officials.',
  },
  {
    id: 'bcft-workshop',
    date: '22 May 2026',
    text: 'Represented at the Workshop for the Centre of Excellence in Blockchain and Cybersecurity, held at the Brahmagupta Centre for Frontier Technologies (BCFT), Bhamashah Techno Hub (BTH) — a flagship initiative of the Government of Rajasthan.',
  },
  {
    id: 'nit-raipur-fdp',
    date: '26 February 2026',
    text: 'Gave a talk on Blockchain-based Payment Channel Networks at the NIT Raipur Faculty Development Programme on Advanced Topics in FinTech Security.',
  },
]

export const spritLabUrl = 'https://home.iitj.ac.in/~susilmohanty/spritlab/index.html'

export const courses: Course[] = [
  {
    id: 'csl7490',
    code: 'CSL 7490',
    name: 'Introduction to Blockchain',
    semester: 'Spring',
    year: 2026,
    active: true,
    description:
      'Covers digital trust, distributed ledger technology, cryptography fundamentals, consensus mechanisms (Proof of Work, Proof of Stake), Bitcoin, Ethereum, Hyperledger Fabric, smart contracts, and real-world blockchain applications.',
    textbooks: [
      'A. Bahga and V. Madisetti, "Blockchain Applications: A Hands-On Approach" (2017)',
      'M. Swan, "Blockchain: Blueprint for a New Economy"',
      'R. Wattenhofer, "The Science of the Blockchain"',
      'I. Bashir, "Mastering Blockchain"',
    ],
  },
  {
    id: 'csl6010',
    code: 'CSL 6010',
    name: 'Cybersecurity',
    semester: 'Summer',
    year: 2026,
    active: true,
    description:
      'Covers cyber threats and vulnerabilities, access control, authentication, cryptography, secure protocol design, network security, blockchain applications in security, and cyber forensics.',
    textbooks: [
      'W. Stallings, "Cryptography and Network Security" (2017)',
      'Colin Boyd et al., "Protocols for Authentication and Key Establishment"',
      'D. Stinson and M. Paterson, "Cryptography: Theory and Practice"',
      'P. W. Singer and A. Friedman, "Cybersecurity and Cyberwar"',
    ],
  },
  {
    id: 'csl3030',
    code: 'CSL 3030',
    name: 'Operating Systems (Theory + Lab)',
    semester: 'Spring',
    year: 2026,
    active: true,
    syllabusUrl: 'https://iitj.ac.in/PageImages/Gallery/07-2025/CSE-Courses-Details.pdf',
    description:
      'Covers process and thread management, CPU scheduling, synchronization and deadlocks, memory management and virtual memory, file systems, and I/O subsystems, with a hands-on lab component implementing core operating-system concepts.',
    textbooks: [
      'A. Silberschatz, P. B. Galvin and G. Gagne, "Operating System Concepts"',
      'A. S. Tanenbaum and H. Bos, "Modern Operating Systems"',
      'W. Stallings, "Operating Systems: Internals and Design Principles"',
    ],
  },
]
