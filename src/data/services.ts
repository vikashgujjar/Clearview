export interface Service {
  id: string;
  title: string;
  tag: string;
  img: string;
  body: string[];
  bullets: string[];
  detailedDescription?: string;
  benefits?: string[];
  process?: string[];
}

export const services: Service[] = [
  {
    id: 'alta',
    title: 'ALTA Surveys',
    tag: 'Commercial',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
    body: [
      'ALTA Surveys are primarily conducted for commercial properties and are typically required by lenders and law firms. Established by the American Land Title Association, they are the gold standard in commercial surveying.',
      'These surveys identify or establish all property boundary corners and locate all above-ground improvements both on the subject property and within five feet of its boundaries.',
      'ALTA Surveys also include a review of the Schedule B-II section of the title commitment, documenting relevant survey-related matters.',
    ],
    bullets: [],
    detailedDescription: 'The ALTA/NSPS Land Title Survey is the most comprehensive survey available, meeting specific national standards set by the American Land Title Association and the National Society of Professional Surveyors. This survey is crucial for commercial real estate transactions as it provides a detailed map of the property, including boundaries, easements, encroachments, and improvements.',
    benefits: [
      'Required for most commercial title insurance policies',
      'Provides definitive evidence for boundary disputes',
      'Identifies potential zoning violations early',
      'Documents all recorded easements and right-of-ways'
    ],
    process: [
      'Initial records research and commitment review',
      'Field crew visit for precise boundary measurement',
      'Data analysis and map drafting',
      'Final certification and delivery'
    ]
  },
  {
    id: 'boundary',
    title: 'Boundary Surveys',
    tag: 'Residential',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    body: [
      'Also referred to as a Mortgage or Loan Survey, this is the most common type of survey required by lenders during the financing process.',
      'A Boundary Survey involves determining and marking property corners, locating visible fixed improvements within the property, and identifying potential issues — such as encroachments.',
    ],
    bullets: [],
    detailedDescription: 'A standard boundary survey is essential for any homeowner or property buyer. It clearly defines where your property begins and ends, which is vital for installing fences, building additions, or resolving neighbor disputes. We use high-precision GPS and total station equipment to ensure your markers are placed with absolute certainty.',
    benefits: [
      'Essential for property fencing and additions',
      'Resolves boundary disputes with neighbors',
      'Required for many residential loan approvals',
      'Provides a clear map of existing improvements'
    ],
    process: [
      'Deed research and utility locating',
      'Corner marking with iron pins/headers',
      'Measurement of existing structures',
      'Final signed and sealed plat preparation'
    ]
  },
  {
    id: 'asbuilt',
    title: 'As-Built Surveys',
    tag: 'Construction',
    img: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=1200&q=80',
    body: [
      'Also referred to as a Record Survey, an As-Built Survey is typically performed during the final phase of construction.',
      'It documents the horizontal and vertical positions of newly constructed features as they were actually built.',
    ],
    bullets: [],
    detailedDescription: 'As-Built surveys provide the "final word" on a construction project. They verify that the infrastructure—such as utilities, foundations, and roads—was built exactly according to the approved engineering plans. This data is critical for obtaining certificates of occupancy and for future maintenance.',
    benefits: [
      'Verifies compliance with design plans',
      'Required for many governmental approvals',
      'Accurate record for future maintenance',
      'Identifies deviations from original design early'
    ],
    process: [
      'Field measurement post-construction',
      'Vertical elevation check of utilities',
      'Comparison with original design blue-prints',
      'Record drawing delivery in CAD format'
    ]
  },
  {
    id: 'construction',
    title: 'Construction Layout',
    tag: 'All Projects',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    body: [
      'Clearview provides a comprehensive range of construction layout services tailored to meet project requirements from staking structure to vertical control.',
    ],
    bullets: [
      'Stakeout for roadways',
      'Sewer and storm system layout',
      'Building placement',
      'Retention pond staking',
    ],
    detailedDescription: 'Precise layout is the difference between a successful build and a costly correction. We translate architectural plans into the real world, placing physical stakes exactly where foundations, utilities, and roads need to go. Our crews work seamlessly with contractors to keep projects on schedule.',
    benefits: [
      'Prevents costly construction errors',
      'Coordinates with heavy machinery operators',
      'Ensures vertical drainage is correct',
      'Keeps projects within legal setbacks'
    ],
    process: [
      'CAD data upload to field equipment',
      'Establishment of site control points',
      'Physical staking of foundations and utilities',
      'Verification check of all laid out points'
    ]
  },
  {
    id: 'elevation',
    title: 'Elevation Certificates',
    tag: 'FEMA / Flood',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    body: [
      'Elevation Certificates are required by lenders when a property is located within a Flood Hazard Area designated by FEMA.',
    ],
    bullets: [],
    detailedDescription: 'A correctly prepared Elevation Certificate can save homeowners thousands of dollars in flood insurance premiums. We measure your property’s elevations compared to FEMA’s Base Flood Elevation data to certify your flood risk accuracy.',
    benefits: [
      'Can lower flood insurance premiums',
      'Required for rebuilding in flood zones',
      'Used for flood mitigation grant applications',
      'Official documentation for FEMA compliance'
    ],
    process: [
      'Check of local FEMA flood maps',
      'Precision elevation shot of building lowest floor',
      'Documentation of machinery and garage elevations',
      'Submission to insurance agent/FEMA'
    ]
  },
  {
    id: 'topo',
    title: 'Topographic Survey',
    tag: 'Site Planning',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    body: [
      'A Topographic Survey maps both natural and man-made features to show their horizontal and vertical relationships.',
    ],
    bullets: [],
    detailedDescription: 'Before you can build, you must understand the ground. Our topographic surveys provide the detailed elevation data and site feature mapping that architects and engineers need to design roads, buildings, and drainage systems accurately.',
    benefits: [
      'Essential for site civil engineering',
      'Identifies drainage and runoff patterns',
      'Maps vegetation and existing utilities',
      'Required for major grading permits'
    ],
    process: [
      'Total station/GPS feature mapping',
      'Cross-sectional elevation measurements',
      'Utility structure location mapping',
      'Creation of 3D contour maps and CAD files'
    ]
  },
];

export const tagColors: Record<string, { bg: string; border: string; text: string }> = {
  Commercial: { bg: 'rgba(0,79,128,0.70)', border: 'rgba(0,170,238)', text: '#fff' },
  Residential: { bg: 'rgba(16,185,129,0.70)', border: 'rgba(16,185,129)', text: '#000' },
  Construction: { bg: 'rgba(59,130,246,0.70)', border: 'rgba(59,130,246)', text: '#fff' },
  'All Projects': { bg: 'rgba(0,79,128,0.70)', border: 'rgba(0,170,238)', text: '#fff' },
  'FEMA / Flood': { bg: 'rgba(217,119,6,0.70)', border: 'rgba(217,119,6)', text: '#fff' },
  'Site Planning': { bg: 'rgba(20,184,166,0.70)', border: 'rgba(20,184,166)', text: '#fff' },
};
