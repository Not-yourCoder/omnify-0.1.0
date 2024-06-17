export interface CompanyEntity {
  name: string;
  type: "Class" | "Facility" | "Service" | "Product";
  visibility: "Private" | "Public";
}

export interface Service {
  label: string;
  placeholder: string;
}

export const companyEntities: CompanyEntity[] = [
  { name: "Aqua Aerobics Class", type: "Class", visibility: "Public" },
  { name: "Archery Facility", type: "Facility", visibility: "Private" },
  { name: "Art Workshop", type: "Service", visibility: "Public" },
  { name: "Athletic Wear", type: "Product", visibility: "Private" },

  { name: "Basketball Class", type: "Class", visibility: "Public" },
  { name: "Boxing Facility", type: "Facility", visibility: "Private" },
  { name: "Business Consulting", type: "Service", visibility: "Private" },
  { name: "Bootcamp Training", type: "Product", visibility: "Public" },

  { name: "Cycling Class", type: "Class", visibility: "Public" },
  { name: "Climbing Wall", type: "Facility", visibility: "Private" },
  { name: "Catering Service", type: "Service", visibility: "Public" },
  { name: "Camping Gear", type: "Product", visibility: "Private" },

  { name: "Dance Class", type: "Class", visibility: "Public" },
  { name: "Dance Court", type: "Facility", visibility: "Private" },
  { name: "Digital Marketing", type: "Service", visibility: "Private" },
  { name: "Dietary Supplements", type: "Product", visibility: "Public" },

  { name: "E-commerce Class", type: "Class", visibility: "Public" },
  { name: "Event Hall", type: "Facility", visibility: "Private" },
  { name: "Engineering Services", type: "Service", visibility: "Public" },
  { name: "Electronic Gadgets", type: "Product", visibility: "Private" },

  { name: "Fitness Class", type: "Class", visibility: "Public" },
  { name: "Football Field", type: "Facility", visibility: "Private" },
  { name: "Financial Consulting", type: "Service", visibility: "Private" },
  { name: "Fitness Equipment", type: "Product", visibility: "Public" },

  { name: "Guitar Lessons", type: "Class", visibility: "Public" },
  { name: "Golf Course", type: "Facility", visibility: "Private" },
  { name: "Graphic Design", type: "Service", visibility: "Public" },
  { name: "Gardening Tools", type: "Product", visibility: "Private" },

  { name: "Hiking Class", type: "Class", visibility: "Public" },
  { name: "Health Spa", type: "Facility", visibility: "Private" },
  { name: "Home Cleaning", type: "Service", visibility: "Public" },
  { name: "Home Decor", type: "Product", visibility: "Private" },

  { name: "Ice Skating Class", type: "Class", visibility: "Public" },
  { name: "Indoor Pool", type: "Facility", visibility: "Private" },
  { name: "IT Support", type: "Service", visibility: "Public" },
  { name: "Interactive Toys", type: "Product", visibility: "Private" },

  { name: "Judo Class", type: "Class", visibility: "Public" },
  { name: "Jazz Studio", type: "Facility", visibility: "Private" },
  { name: "Jewelry Making", type: "Service", visibility: "Public" },
  { name: "Journals and Planners", type: "Product", visibility: "Private" },

  { name: "Kickboxing Class", type: "Class", visibility: "Public" },
  { name: "Kayaking Facility", type: "Facility", visibility: "Private" },
  { name: "Karaoke Services", type: "Service", visibility: "Public" },
  { name: "Kitchen Appliances", type: "Product", visibility: "Private" },

  { name: "Language Class", type: "Class", visibility: "Public" },
  { name: "Library", type: "Facility", visibility: "Private" },
  { name: "Landscaping Service", type: "Service", visibility: "Public" },
  { name: "Lighting Fixtures", type: "Product", visibility: "Private" },

  { name: "Meditation Class", type: "Class", visibility: "Public" },
  { name: "Music Studio", type: "Facility", visibility: "Private" },
  { name: "Marketing Service", type: "Service", visibility: "Public" },
  { name: "Mobile Accessories", type: "Product", visibility: "Private" },

  { name: "Nutrition Class", type: "Class", visibility: "Public" },
  { name: "Nursing Home", type: "Facility", visibility: "Private" },
  { name: "Networking Service", type: "Service", visibility: "Public" },
  { name: "Novelty Items", type: "Product", visibility: "Private" },

  { name: "Outdoor Survival Class", type: "Class", visibility: "Public" },
  { name: "Opera House", type: "Facility", visibility: "Private" },
  { name: "Office Cleaning", type: "Service", visibility: "Public" },
  { name: "Office Supplies", type: "Product", visibility: "Private" },

  { name: "Pilates Class", type: "Class", visibility: "Public" },
  { name: "Park Facility", type: "Facility", visibility: "Private" },
  { name: "Photography Services", type: "Service", visibility: "Public" },
  { name: "Personal Care Products", type: "Product", visibility: "Private" },

  { name: "Quilting Class", type: "Class", visibility: "Public" },
  { name: "Quiet Room", type: "Facility", visibility: "Private" },
  { name: "Quality Assurance", type: "Service", visibility: "Public" },
  { name: "Quick Snacks", type: "Product", visibility: "Private" },

  { name: "Running Class", type: "Class", visibility: "Public" },
  { name: "Racquetball Court", type: "Facility", visibility: "Private" },
  { name: "Real Estate Services", type: "Service", visibility: "Public" },
  { name: "Running Gear", type: "Product", visibility: "Private" },

  { name: "Sailing Class", type: "Class", visibility: "Public" },
  { name: "Skate Park", type: "Facility", visibility: "Private" },
  { name: "Software Development", type: "Service", visibility: "Public" },
  { name: "Sporting Goods", type: "Product", visibility: "Private" },

  { name: "Tennis Class", type: "Class", visibility: "Public" },
  { name: "Tennis Court", type: "Facility", visibility: "Private" },
  { name: "Tutoring Service", type: "Service", visibility: "Public" },
  { name: "Travel Gear", type: "Product", visibility: "Private" },

  { name: "Upholstery Class", type: "Class", visibility: "Public" },
  { name: "Urban Garden", type: "Facility", visibility: "Private" },
  { name: "User Experience Design", type: "Service", visibility: "Public" },
  { name: "Umbrellas", type: "Product", visibility: "Private" },

  { name: "Violin Class", type: "Class", visibility: "Public" },
  { name: "Volleyball Court", type: "Facility", visibility: "Private" },
  { name: "Video Editing Service", type: "Service", visibility: "Public" },
  { name: "Vitamins", type: "Product", visibility: "Private" },

  { name: "Writing Class", type: "Class", visibility: "Public" },
  { name: "Wellness Center", type: "Facility", visibility: "Private" },
  { name: "Web Development", type: "Service", visibility: "Public" },
  { name: "Workstation Accessories", type: "Product", visibility: "Private" },

  { name: "Xylophone Class", type: "Class", visibility: "Public" },
  { name: "X-ray Facility", type: "Facility", visibility: "Private" },
  { name: "Xerox Services", type: "Service", visibility: "Public" },
  { name: "Xenon Lights", type: "Product", visibility: "Private" },

  { name: "Yoga Class", type: "Class", visibility: "Public" },
  { name: "Yacht Facility", type: "Facility", visibility: "Private" },
  { name: "Yard Maintenance", type: "Service", visibility: "Public" },
  { name: "Yoga Mats", type: "Product", visibility: "Private" },

  { name: "Zumba Class", type: "Class", visibility: "Public" },
  { name: "Zoo Facility", type: "Facility", visibility: "Private" },
  { name: "Zoning Consulting", type: "Service", visibility: "Public" },
  { name: "Zero Waste Products", type: "Product", visibility: "Private" },
];
export const serviceNames: string[] = [
  "Art Workshop",
  "Business Consulting",
  "Catering Service",
  "Digital Marketing",
  "Engineering Services",
  "Financial Consulting",
  "Graphic Design",
  "Health Spa",
  "Home Cleaning",
  "Landscaping Service",
  "Marketing Service",
  "Networking Service",
  "Photography Services",
  "Quality Assurance",
  "Real Estate Services",
  "Software Development",
  "Tutoring Service",
  "User Experience Design",
  "Video Editing Service",
  "Web Development",
  "Writing Class",
  "Zoning Consulting",
];

export const service: Service[] = [
  { label: "Service type", placeholder: "Select service type" },
  { label: "Status", placeholder: "Select status" },
];
export const serviceStatus: string[] = ["active", "lead", "inactive"];
