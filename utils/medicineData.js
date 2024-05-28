const medicinesData = [
  {
    id: 1,
    name: "Avastin 400mg Injection",
    composition: "Bevacizumab (400mg)",
    uses: "Cancer of colon and rectum, Non-small cell lung cancer, Kidney cancer, Brain tumor, Ovarian cancer, Cervical cancer",
    sideEffects:
      "Rectal bleeding, Taste change, Headache, Nosebleeds, Back pain, Dry skin, High blood pressure, Protein in urine, Inflammation of the nose",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/f5a26c491e4d48199ab116a69a969be3.jpg",
    manufacturer: "Roche Products India Pvt Ltd",
  },
  {
    id: 2,
    name: "Augmentin 625 Duo Tablet",
    composition: "Amoxycillin  (500mg) +  Clavulanic Acid (125mg)",
    uses: "Treatment of Bacterial infections",
    sideEffects: "Vomiting, Nausea, Diarrhea, Mucocutaneous candidiasis",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/wy2y9bdipmh6rgkrj0zm.jpg",
    manufacturer: "Glaxo SmithKline Pharmaceuticals Ltd",
  },
  {
    id: 3,
    name: "Azithral 500 Tablet",
    composition: "Azithromycin (500mg)",
    uses: "Treatment of Bacterial infections",
    sideEffects: "Nausea, Abdominal pain, Diarrhea",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/kqkouvaqejbyk47dvjfu.jpg",
    manufacturer: "Alembic Pharmaceuticals Ltd",
  },
  {
    id: 4,
    name: "Ascoril LS Syrup",
    composition: "Ambroxol (30mg/5ml) + Levosalbutamol (1mg/5ml) + Guaifenesin (50mg/5ml)",
    uses: "Treatment of Cough with mucus",
    sideEffects:
      "Nausea, Vomiting, Diarrhea, Upset stomach, Stomach pain, Allergic reaction, Dizziness, Headache, Rash, Hives, Tremors, Palpitations, Muscle cramp, Increased heart rate",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/3205599cc49d4073ae66cbb0dbfded86.jpg",
    manufacturer: "Glenmark Pharmaceuticals Ltd",
  },
  {
    id: 5,
    name: "Aciloc 150 Tablet",
    composition: "Ranitidine (150mg)",
    uses: "Treatment of Gastroesophageal reflux disease (Acid reflux), Treatment of Peptic ulcer disease",
    sideEffects: "Headache, Diarrhea, Gastrointestinal disturbance",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/pn7apngctvrtweencwi1.jpg",
    manufacturer: "Cadila Pharmaceuticals Ltd",
  },
  {
    id: 6,
    name: "Allegra 120mg Tablet",
    composition: "Fexofenadine (120mg)",
    uses: "Treatment of Sneezing and runny nose due to allergies, Treatment of Allergic conditions",
    sideEffects: "Headache, Drowsiness, Dizziness, Nausea",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/fa7427131ec64163b5bbafb529df0736.jpg",
    manufacturer: "Sanofi India Ltd",
  },
  {
    id: 7,
    name: "Avil 25 Tablet",
    composition: "Pheniramine (25mg)",
    uses: "Treatment of Allergic conditions, Treatment of Respiratory disease with excessive mucus, Treatment of Skin conditions with inflammation & itching, Treatment and prevention of Meniere's disease",
    sideEffects: "Sedation",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/mmsye6bf97tkcocat24j.jpg",
    manufacturer: "Sanofi India Ltd",
  },
  {
    id: 8,
    name: "Aricep 5 Tablet",
    composition: "Donepezil (5mg)",
    uses: "Alzheimer's disease, Common cold, Urinary incontinence",
    sideEffects:
      "Rash, Nausea, Diarrhea, Insomnia difficulty in sleeping, Weight loss, Accidental injury",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/d7ojjdaw2gsm5sie1glu.jpg",
    manufacturer: "Eisai Pharmaceuticals India Pvt Ltd",
  },
  {
    id: 9,
    name: "Amoxyclav 625 Tablet",
    composition: "Amoxycillin  (500mg) +  Clavulanic Acid (125mg)",
    uses: "Treatment of Bacterial infections",
    sideEffects: "Vomiting, Nausea, Diarrhea, Mucocutaneous candidiasis",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/acaa6608e016456f9cafcca2156ad3de.jpg",
    manufacturer: "Abbott",
  },
  // Continue adding other medicines...
  {
    id: 21,
    name: "Betacap TR 40 Capsule",
    composition: "Propranolol (40mg)",
    uses: "Treatment of Pheochromocytoma, Treatment of Hypertension (high blood pressure), Prevention of migraine, Treatment of Anxiety, Treatment of Arrhythmia, Prevention of Heart attack, Prevention of Angina (heart-related chest pain), Treatment of Tremors",
    sideEffects:
      "Tiredness, Weakness, Raynaud's phenomenon, Arrhythmia (irregular heartbeats), Nausea, Vomiting, Diarrhea",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/gbo9tlhcy1vsyn0gah0m.jpg",
    manufacturer: "Sun Pharmaceutical Industries Ltd",
  },
  {
    id: 22,
    name: "Bandy Plus Suspension",
    composition: "Albendazole (200mg) + Ivermectin (1.5mg)",
    uses: "Treatment of Parasitic worm infections",
    sideEffects:
      "Abdominal pain, Constipation, Diarrhea, Loss of appetite, Headache, Dizziness, Hair loss, Itching, Urticaria, Fatigue, Fever, Rigors",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/oxlsk7ifb0ucpqvhhd7t.jpg",
    manufacturer: "Mankind Pharma Ltd",
  },
  {
    id: 23,
    name: "Becadexamin Capsule",
    composition:
      "Beta-carotene (2500IU) + Biotin (30mcg) + Folic Acid (vitamin B9) (1.5mg) + Niacinamide (vitamin B3) (100mg) + Riboflavin (vitamin B2) (10mg) + Thiamine (vitamin B1) (10mg) + Vitamin B12 (15mcg) + Vitamin C (75mg) + Vitamin D3 (400IU) + Vitamin E (15IU) + Zinc (22.5mg)",
    uses: "General weakness, Nutritional deficiencies, Osteoporosis, Pregnancy",
    sideEffects: "Nausea, Vomiting, Abdominal cramp, Diarrhea",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/awr4rj8c8lmyudkfy6rb.jpg",
    manufacturer: "Glaxo SmithKline Pharmaceuticals Ltd",
  },
  {
    id: 24,
    name: "Bandy-Plus Tablet",
    composition: "Albendazole (400mg) + Ivermectin (6mg)",
    uses: "Treatment of Parasitic worm infections",
    sideEffects:
      "Abdominal pain, Constipation, Diarrhea, Loss of appetite, Headache, Dizziness, Hair loss, Itching, Urticaria, Fatigue, Fever, Rigors",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/txvld6xayhfqc7ovdkgv.jpg",
    manufacturer: "Mankind Pharma Ltd",
  },
  {
    id: 25,
    name: "Beplex Forte Capsule",
    composition:
      "Niacinamide (vitamin B3) (100mg) + Vitamin B12 (15mcg) + Vitamin B6 (Pyridoxine) (3mg) + Vitamin C (75mg)",
    uses: "Treatment of Acne, Treatment of Anemia, Wound healing, Treatment of Osteoarthritis",
    sideEffects: "Nausea, Vomiting, Abdominal cramp, Diarrhea",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/h9tqsgpi1gahhy6tacuf.jpg",
    manufacturer: "Mankind Pharma Ltd",
  },
  {
    id: 26,
    name: "Becosules Capsule",
    composition:
      "Beta-carotene (2500IU) + Biotin (30mcg) + Folic Acid (vitamin B9) (1.5mg) + Niacinamide (vitamin B3) (100mg) + Riboflavin (vitamin B2) (10mg) + Thiamine (vitamin B1) (10mg) + Vitamin B12 (15mcg) + Vitamin C (75mg) + Vitamin D3 (400IU) + Vitamin E (15IU) + Zinc (22.5mg)",
    uses: "Nutritional deficiencies, Pregnancy, Osteoporosis",
    sideEffects: "Nausea, Vomiting, Abdominal cramp, Diarrhea",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/ijujlszvqqsqdfjknyxd.jpg",
    manufacturer: "Pfizer Ltd",
  },
  {
    id: 27,
    name: "Betnesol Tablet",
    composition: "Betamethasone (500mcg)",
    uses: "Treatment of Allergic conditions, Asthma, Rheumatic disorder, Skin disorders, Eye disorders, Nephrotic syndrome, Connective tissue disorder",
    sideEffects:
      "Weight gain, Increased appetite, Mood changes, Acne, Muscle weakness, Increased blood pressure, Increased blood glucose level, Cushingoid appearance, Osteoporosis, Increased risk of infection",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/uilvdu5alvbxmxqme8hf.jpg",
    manufacturer: "Glaxo SmithKline Pharmaceuticals Ltd",
  },
  {
    id: 28,
    name: "Betacap 20 Tablet",
    composition: "Propranolol (20mg)",
    uses: "Prevention of Migraine, Treatment of Hypertension (high blood pressure), Prevention of Heart attack, Prevention of Angina (heart-related chest pain), Treatment of Arrhythmia, Treatment of Tremors, Treatment of Anxiety, Treatment of Pheochromocytoma",
    sideEffects:
      "Tiredness, Weakness, Raynaud's phenomenon, Arrhythmia (irregular heartbeats), Nausea, Vomiting, Diarrhea",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/ksekc9ojpf5x8cbrsf9i.jpg",
    manufacturer: "Sun Pharmaceutical Industries Ltd",
  },
  {
    id: 29,
    name: "Brutaflam-MR 4 Tablet",
    composition: "Etoricoxib (60mg) + Thiocolchicoside (4mg)",
    uses: "Treatment of Pain due to muscle spasm",
    sideEffects:
      "Diarrhea, Stomach pain, Indigestion, Flatulence, Swelling of hands, Feet swelling, Flu-like symptoms",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/qd1xcswzvcccpqflknsa.jpg",
    manufacturer: "Mankind Pharma Ltd",
  },
  {
    id: 30,
    name: "Becosules Syrup",
    composition:
      "Cyanocobalamin (vitamin B12) (5mcg) + Folic Acid (vitamin B9) (1.5mg) + Niacinamide (vitamin B3) (50mg) + Pyridoxine (vitamin B6) (1.5mg)",
    uses: "Nutritional deficiencies, Pregnancy, Osteoporosis",
    sideEffects: "Nausea, Vomiting, Abdominal cramp, Diarrhea",
    imageURL:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/n5vxrlgcemxxidufm3z5.jpg",
    manufacturer: "Pfizer Ltd",
  },
];



const exerciseData = [
  {
    id: 1,
    image:
      "https://responsephysio.com/wp-content/uploads/2021/05/ankle-exercises.jpg",
    title: "ANKLE & FOOT PAIN EXERCISES",
    description:
      "View exercises to relieve injuries and conditions affecting the ankle and foot; including fractures, Achilles tendonitis, arthritis and sprains.",
  },
  {
    id: 2,
    image:
      "https://responsephysio.com/wp-content/uploads/2021/05/back-exercises.jpg",
    title: "BACK PAIN EXERCISES",
    description:
      "View exercises to relieve injuries and conditions affecting the lower back; including backache from bad posture, sciatica, torn muscles, arthritis, scoliosis, and disc problems",
  },
  {
    id: 3,
    image:
      "https://responsephysio.com/wp-content/uploads/2021/06/elbow-1-e1629198166160.jpg",
    title: "ELBOW PAIN EXERCISES",
    description:
      "View exercises to relieve injuries and conditions affecting the elbow; including golfer’s elbow, tennis elbow, overuse, bursitis, arthritis, tendonitis and trapped nerves.",
  },
  {
    id: 4,
    image:
      "https://responsephysio.com/wp-content/uploads/2021/06/hand-and-wrist-image.jpg",
    title: "HAND & WRIST PAIN EXERCISES",
    description:
      "View exercises to relieve injuries and conditions affecting the hand and wrist; including arthritis, carpal tunnel syndrome, tendonitis, de Quervain's, repetitive strain and writer's cramps.",
  },
  {
    id: 5,
    image:
      "https://responsephysio.com/wp-content/uploads/2021/06/hip-exercise.jpg",
    title: "HIP PAIN EXERCISES",
    description:
      "View exercises to relieve injuries and conditions affecting the hips; including fractures, strains, bursitis, arthritis, snapping hip, sciatica, labral tears and overuse.",
  },

  {
    id: 6,
    image:
      "https://responsephysio.com/wp-content/uploads/2021/06/knee-exercise.jpg",
    title: "KNEE PAIN EXERCISES",
    description:
      "View exercises to relieve injuries and conditions affecting the knee; including runners knee, fractures, strains, tendonitis, Osgood-Schlatters disease and arthritis.",
  },
];




module.exports = { medicinesData, exerciseData };
