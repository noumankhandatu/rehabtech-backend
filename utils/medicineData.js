const medicinesData = [
  {
    name: "Aspirin",
    description: "Aspirin is used to treat pain, fever, and inflammation.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ibuprofen",
    description:
      "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain and reduce fever.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Paracetamol",
    description:
      "Paracetamol, also known as acetaminophen, is used to treat pain and reduce fever.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Amoxicillin",
    description: "Amoxicillin is an antibiotic used to treat a wide range of bacterial infections.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Loratadine",
    description:
      "Loratadine is an antihistamine used to relieve allergy symptoms such as sneezing, runny nose, and itchy or watery eyes.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Omeprazole",
    description:
      "Omeprazole is a proton pump inhibitor used to reduce stomach acid production and treat conditions such as heartburn, ulcers, and gastroesophageal reflux disease (GERD).",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Cetirizine",
    description:
      "Cetirizine is an antihistamine used to relieve allergy symptoms such as sneezing, runny nose, and itching.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Simvastatin",
    description:
      "Simvastatin is a statin medication used to lower cholesterol levels and reduce the risk of heart disease.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Metformin",
    description:
      "Metformin is an oral diabetes medication used to control blood sugar levels in people with type 2 diabetes.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Warfarin",
    description: "Warfarin is an anticoagulant medication used to prevent blood clots.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Atorvastatin",
    description:
      "Atorvastatin is a statin medication used to lower cholesterol levels and reduce the risk of heart disease.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Prednisone",
    description:
      "Prednisone is a corticosteroid used to treat a variety of conditions, including inflammation, allergies, and autoimmune disorders.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Metoprolol",
    description:
      "Metoprolol is a beta-blocker used to treat high blood pressure, chest pain, and heart failure.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Albuterol",
    description:
      "Albuterol is a bronchodilator used to treat asthma, chronic obstructive pulmonary disease (COPD), and other breathing disorders.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Levothyroxine",
    description:
      "Levothyroxine is a thyroid hormone used to treat hypothyroidism (low thyroid hormone levels) and prevent goiter.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Amlodipine",
    description:
      "Amlodipine is a calcium channel blocker used to treat high blood pressure and chest pain (angina).",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Tramadol",
    description: "Tramadol is an opioid pain medication used to treat moderate to severe pain.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Losartan",
    description:
      "Losartan is an angiotensin II receptor blocker used to treat high blood pressure and reduce the risk of stroke in certain patients.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Diazepam",
    description:
      "Diazepam is a benzodiazepine medication used to treat anxiety, muscle spasms, seizures, and alcohol withdrawal symptoms.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Gabapentin",
    description:
      "Gabapentin is an anticonvulsant medication used to treat seizures, nerve pain, and restless legs syndrome.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Lisinopril",
    description:
      "Lisinopril is an angiotensin-converting enzyme (ACE) inhibitor used to treat high blood pressure and heart failure.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Hydrochlorothiazide",
    description:
      "Hydrochlorothiazide is a thiazide diuretic (water pill) used to treat high blood pressure and fluid retention (edema).",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Metronidazole",
    description:
      "Metronidazole is an antibiotic and antiprotozoal medication used to treat bacterial and parasitic infections.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sildenafil",
    description:
      "Sildenafil is a medication used to treat erectile dysfunction and pulmonary arterial hypertension.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ciprofloxacin",
    description: "Ciprofloxacin is an antibiotic used to treat a variety of bacterial infections.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Tamsulosin",
    description:
      "Tamsulosin is an alpha-blocker medication used to treat symptoms of benign prostatic hyperplasia (enlarged prostate).",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Montelukast",
    description:
      "Montelukast is a leukotriene receptor antagonist used to treat asthma and allergic rhinitis.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Metronidazole",
    description:
      "Metronidazole is an antibiotic and antiprotozoal medication used to treat bacterial and parasitic infections.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Prednisolone",
    description:
      "Prednisolone is a corticosteroid medication used to treat inflammation, autoimmune conditions, and allergic reactions.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Fluoxetine",
    description:
      "Fluoxetine is a selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression, obsessive-compulsive disorder (OCD), and panic disorder.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Lisinopril",
    description:
      "Lisinopril is an angiotensin-converting enzyme (ACE) inhibitor used to treat high blood pressure and heart failure.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Hydrochlorothiazide",
    description:
      "Hydrochlorothiazide is a thiazide diuretic (water pill) used to treat high blood pressure and fluid retention (edema).",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Metronidazole",
    description:
      "Metronidazole is an antibiotic and antiprotozoal medication used to treat bacterial and parasitic infections.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sildenafil",
    description:
      "Sildenafil is a medication used to treat erectile dysfunction and pulmonary arterial hypertension.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ciprofloxacin",
    description: "Ciprofloxacin is an antibiotic used to treat a variety of bacterial infections.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Tamsulosin",
    description:
      "Tamsulosin is an alpha-blocker medication used to treat symptoms of benign prostatic hyperplasia (enlarged prostate).",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Montelukast",
    description:
      "Montelukast is a leukotriene receptor antagonist used to treat asthma and allergic rhinitis.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Prednisolone",
    description:
      "Prednisolone is a corticosteroid medication used to treat inflammation, autoimmune conditions, and allergic reactions.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Fluoxetine",
    description:
      "Fluoxetine is a selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression, obsessive-compulsive disorder (OCD), and panic disorder.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Cephalexin",
    description:
      "Cephalexin is a cephalosporin antibiotic used to treat bacterial infections, including skin infections, respiratory tract infections, and urinary tract infections.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Duloxetine",
    description:
      "Duloxetine is a serotonin-norepinephrine reuptake inhibitor (SNRI) antidepressant used to treat depression, anxiety, diabetic peripheral neuropathy, fibromyalgia, and chronic musculoskeletal pain.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Amitriptyline",
    description:
      "Amitriptyline is a tricyclic antidepressant used to treat depression, anxiety, and certain types of nerve pain.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Levofloxacin",
    description:
      "Levofloxacin is a fluoroquinolone antibiotic used to treat a variety of bacterial infections.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Pregabalin",
    description:
      "Pregabalin is an anticonvulsant medication used to treat epilepsy, neuropathic pain, fibromyalgia, and generalized anxiety disorder (GAD).",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Carvedilol",
    description:
      "Carvedilol is a beta-blocker medication used to treat high blood pressure, heart failure, and left ventricular dysfunction following a heart attack.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Furosemide",
    description:
      "Furosemide is a loop diuretic (water pill) used to treat fluid retention (edema) in people with congestive heart failure, liver disease, or kidney disorders such as nephrotic syndrome.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Citalopram",
    description:
      "Citalopram is a selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression and panic disorder.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Atenolol",
    description:
      "Atenolol is a beta-blocker medication used to treat high blood pressure, chest pain (angina), and heart rhythm disorders.",
    image: "https://via.placeholder.com/150",
  },
];

module.exports = { medicinesData };
