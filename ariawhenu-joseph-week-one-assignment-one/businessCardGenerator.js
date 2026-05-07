

function getTagLine(yearExp) {
    if (yearExp < 2) return 'Rising Star';
    if (yearExp <= 5) return 'Growing Pro';
    return 'Industry Veteran'
}


function generateBorder(length = 50, char = '*') {
    let border = '';
    for (let i = 0; i < length; i++) border += char;
    return border;
}


function generateCard(name, title, company, email, phone, yearsExp) {
    const border = generateBorder(50, '*');
    const tagline = getTagLine(yearsExp);

    console.log(border);
    console.log('BUSINESS CARD');
    console.log(border);

    console.log(`Name      : ${name}`);
    console.log(`Title     : ${title}`);
    console.log(`Company   : ${company}`);
    console.log(`Email     : ${email}`);
    console.log(`Phone     : ${phone}`);
    console.log(`Experience: ${yearsExp} years`);
    console.log(`Tagline   : ${tagline}`);

    console.log(border);

    // Bonus ASCII rocket decoration
    console.log("      ^");
    console.log("     / \\");
    console.log("    /___\\");
    console.log("    |🚀 |");
    console.log("    |   |");
    console.log("   /|   |\\");
    console.log("  /_|___|_\\");
    console.log(border + "\n");
}


function generateMultipleCards(employees) {
    for (const emp of employees) {
        generateCard(
            emp.name,
            emp.ttile,
            emp.company,
            emp.email,
            emp.phone,
            emp.experience,
            emp.tagline
        );
    }
}



const employees = [
    {
        name: "Ada Kingsley",
        title: "Frontend Developer",
        company: "TechNova",
        email: "ada@technova.com",
        phone: "+234 801 234 5678",
        yearsExp: 1
    },
    {
        name: "Daniel Okafor",
        title: "Backend Engineer",
        company: "CodeBase Ltd",
        email: "daniel@codebase.com",
        phone: "+234 802 345 6789",
        yearsExp: 4
    },
    {
        name: "Sophia Mensah",
        title: "Senior Software Architect",
        company: "CloudSphere",
        email: "sophia@cloudsphere.com",
        phone: "+234 803 456 7890",
        yearsExp: 8
    }
];



generateMultipleCards(employees);