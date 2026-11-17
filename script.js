window.addEventListener("DOMContentLoaded", () => {
    // SEU JSON ORIGINAL INALTERADO
    const currículo = [
    {
      "cv": {
        "metadata": {
          "version": "1.0",
          "language": "pt-BR",
          "lastUpdated": "2026-11-05"
        },
        "personalInformation": {
          "fullName": "João",
          "professionalTitle": "Desenvolvedor",
          "profilePhoto": "photo.jpg",
          "email": "damascenojoaovictor02@gmail.com",
          "phone": "11993746492",
          "whatsapp": "11993746492",
          "location": {
            "city": "Suzano",
            "state": "SP",
            "country": "Brasil",
            "address": "Rua dos Mogi das cruzes 1001"
          },
          "linkedin": "João Victor Damasceno Vieira",
          "github": "github.com/YuOkyn",
          "portfolio": "github.com/YuOkyn",
          "website": "github.com/YuOkyn"
        },
        "professionalSummary": {
          "description": "Desenvolvedor full stack",
          "yearsOfExperience": 0,
          "mainSpecialization": "backend",
          "careerObjective": "Ser um desenvolvedor de carreira e estável profissionalmente"
        },
        "professionalExperience": [
          {
            "company": "Americanas S.A",
            "position": "Operador",
            "employmentType": "",
            "location": "Suzano",
            "startDate": "10/02/2024",
            "endDate": "10/11/2026",
            "current": false,
            "description": "Realizar serviços inerentes à loja",
            "responsibilities": ["Atendimento e organização"],
            "achievements": ["Boa comunicação"],
            "technologies": []
          }
        ],
        "education": [
          {
            "institution": "Unipiaget Suzano",
            "degree": "",
            "fieldOfStudy": "",
            "level": "1",
            "startDate": "10/08/2026",
            "endDate": "",
            "current": true,
            "description": "Análise e desenvolvimento de sistemas"
          }
        ],
        "skills": {
          "technical": [
            {
              "name": "HTML, CSS, JavaScript, PostgreSQL, Python",
              "level": "1"
            }
          ],
          "behavioral": [],
          "tools": ["Git"],
          "methodologies": ["Projetos no git"]
        },
        "languages": [
          {
            "name": "Inglês",
            "proficiency": "básico/médio"
          }
        ],
        "certifications": [],
        "projects": [
          {
            "name": "Simulador de juros",
            "description": "Simula parcelamentos com uma determinada taxa e amortização",
            "role": "",
            "technologies": ["HTML, CSS e JavaScript"],
            "url": "Yuokyn.github.io/sim-juros",
            "startDate": "09/2026",
            "endDate": "10/2026"
          }
        ],
        "courses": [],
        "additionalInformation": {
          "availability": "",
          "workModel": "",
          "travelAvailability": false,
          "additionalNotes": ""
        },
        "preferences": {
          "targetPositions": [],
          "targetIndustries": [],
          "preferredLocations": [],
          "preferredWorkModel": ""
        }
      }
    }
    ];

    // SCRIPT PARA LER O JSON E PREENCHER O HTML DINAMICAMENTE
    const cvData = currículo[0].cv;
    const pInfo = cvData.personalInformation;

    // Inserindo a Foto de Perfil dinamicamente
    const photoContainer = document.getElementById("photoContainer");
    if (photoContainer) {
        photoContainer.innerHTML = `<img src="${pInfo.profilePhoto}" alt="Foto de ${pInfo.fullName}" class="foto-perfil">`;
    }

    // Dados Pessoais
    document.getElementById("fullName").innerText = pInfo.fullName;
    document.getElementById("professionalTitle").innerText = pInfo.professionalTitle;
    document.getElementById("email").innerText = `Email: ${pInfo.email}`;
    document.getElementById("phone").innerText = `Telefone: ${pInfo.phone}`;
    document.getElementById("location").innerText = `Local: ${pInfo.location.city} - ${pInfo.location.state}`;

    const githubEl = document.getElementById("github");
    githubEl.href = `https://${pInfo.github}`;
    githubEl.innerText = pInfo.github;

    // Resumo
    document.getElementById("summaryDescription").innerText = cvData.professionalSummary.description;
    document.getElementById("careerObjective").innerText = cvData.professionalSummary.careerObjective;

    // Experiência Profissional
    const expContainer = document.getElementById("experienceContainer");
    cvData.professionalExperience.forEach(exp => {
        expContainer.innerHTML += `
            <div class="item">
                <div class="item-header">
                    <span>${exp.position} - ${exp.company}</span>
                    <span class="date">${exp.startDate} a ${exp.endDate}</span>
                </div>
                <p><strong>Local:</strong> ${exp.location}</p>
                <p>${exp.description}</p>
                <p><strong>Responsabilidades:</strong> ${exp.responsibilities.join(", ")}</p>
                <p><strong>Destaques:</strong> ${exp.achievements.join(", ")}</p>
            </div>
        `;
    });

    // Educação
    const eduContainer = document.getElementById("educationContainer");
    cvData.education.forEach(edu => {
        eduContainer.innerHTML += `
            <div class="item">
                <div class="item-header">
                    <span>${edu.institution}</span>
                    <span class="date">Início: ${edu.startDate}</span>
                </div>
                <p>${edu.description}</p>
            </div>
        `;
    });

    // Habilidades
    const skillsContainer = document.getElementById("skillsContainer");
    if (cvData.skills.technical.length > 0) {
        const techs = cvData.skills.technical[0].name.split(",");
        techs.forEach(tech => {
            skillsContainer.innerHTML += `<li class="tag">${tech.trim()}</li>`;
        });
    }
    document.getElementById("methodologies").innerText = cvData.skills.methodologies.join(", ");

    // Projetos
    const projContainer = document.getElementById("projectsContainer");
    cvData.projects.forEach(proj => {
        projContainer.innerHTML += `
            <div class="item">
                <div class="item-header">
                    <a href="https://${proj.url}" target="_blank">${proj.name}</a>
                    <span class="date">${proj.startDate} - ${proj.endDate}</span>
                </div>
                <p>${proj.description}</p>
                <p><strong>Tecnologias:</strong> ${proj.technologies.join(", ")}</p>
            </div>
        `;
    });

    // Idiomas
    const langContainer = document.getElementById("languagesContainer");
    cvData.languages.forEach(lang => {
        langContainer.innerHTML += `<p>${lang.name} (${lang.proficiency})</p>`;
    });
});