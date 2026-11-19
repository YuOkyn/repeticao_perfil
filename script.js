const curriculo = {
  "cv": {
    "metadata": {
      "version": "1.0",
      "language": "pt-BR",
      "lastUpdated": "2026-11-05"
    },
    "personalInformation": {
      "fullName": "João Victor Damasceno Vieira",
      "professionalTitle": "Desenvolvedor",
      "profilePhoto": "foto.jpg",
      "email": "damascenojoaovictor02@gmail.com",
      "phone": "(11) 993746492",
      "whatsapp": "(11) 993746492",
      "location": {
        "city": "Suzano",
        "state": "São paulo",
        "country": "Brasil",
        "address": "Rua assunção 15"
      },
      "linkedin": "João Victor Damasceno Vieira",
      "github": "github.com/YuOkyn",
      "portfolio": "yuokyn.github.io/",
      "website": "yuokyn.github.io/profile-page"
    },
    "professionalSummary": {
      "description": "Desenvolvedor de sistemas full stack",
      "yearsOfExperience": 0,
      "mainSpecialization": "backend",
      "careerObjective": "Ser desenvolvedor pleno e estável na carreira"
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
        "description": "",
        "responsibilities": [],
        "achievements": [],
        "technologies": []
      }
    ]
    ,
    "education": [
      {
        "institution": "Unipiaget Suzano",
        "degree": "",
        "fieldOfStudy": "",
        "level": "1",
        "startDate": "10/08/2026",
        "endDate": "",
        "current": false,
        "description": ""
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "",
          "level": ""
        }
      ],
      "behavioral": [],
      "tools": [],
      "methodologies": []
    },
    "languages": [
      {
        "name": "",
        "proficiency": ""
      }
    ],
    "certifications": [
      {
        "name": "",
        "issuer": "",
        "issueDate": "",
        "expirationDate": "",
        "credentialUrl": ""
      }
    ],
    "projects": [
      {
        "name": "",
        "description": "",
        "role": "",
        "technologies": [],
        "url": "",
        "startDate": "",
        "endDate": ""
      }
    ],
    "courses": [
      {
        "name": "",
        "institution": "",
        "completionDate": "",
        "workloadHours": 0
      }
    ],
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

const cv = curriculo.cv
const infop = cv.personalInformation
const loc = infop.location
function inserir (id, valor){
    document.getElementById(id).innerHTML = valor
}
document.getElementById("profilePhoto").src = infop.profilePhoto
inserir ("fullName", infop.fullName)
inserir ("email", infop.email)
inserir ("whatsapp",infop.whatsapp)
inserir ("location", loc.city+", "+loc.state+", "+loc.country+", "+loc.address)

const resumo = cv.professionalSummary

inserir("description", resumo.description)
inserir("yearsOfExperience", resumo.yearsOfExperience)
inserir("mainSpecialization", resumo.mainSpecialization)
inserir("careerObjective", resumo.careerObjective)

const exp = cv.professionalExperience[0]

inserir("company", exp.company)
inserir("position", exp.position)
inserir("employmentType", exp.employmentType)
inserir("experienceLocation", exp.location)
inserir("startDate", exp.startDate)
inserir("endDate", exp.endDate)
inserir("experienceDescription", exp.description)

const formacao = cv.education[0]

inserir("institution", formacao.institution)
inserir("degree", formacao.degree)
inserir("fieldOfStudy", formacao.fieldOfStudy)
inserir("educationLevel", formacao.level)
inserir("educationStart", formacao.startDate)
inserir("educationEnd", formacao.endDate)
inserir("educationDescription", formacao.description)

const hab = cv.skills

inserir("technical", hab.technical[0].name)
inserir("technicalLevel", hab.technical[0].level)

inserir("behavioral", hab.behavioral.join(", "))
inserir("tools", hab.tools.join(", "))
inserir("methodologies", hab.methodologies.join(", "))

const idiomas = cv.languages[0]

inserir("language", idiomas.name)
inserir("proficiency", idiomas.proficiency)

const cert = cv.certifications[0]

inserir("certification", cert.name)
inserir("issuer", cert.issuer)
inserir("issueDate", cert.issueDate)
inserir("expirationDate", cert.expirationDate)
inserir("credentialUrl", cert.credentialUrl)

const projetos = cv.projects[0]

inserir("projectName", projetos.name)
inserir("projectDescription", projetos.description)
inserir("projectRole", projetos.role)
inserir("projectUrl", projetos.url)
inserir("projectStart", projetos.startDate)
inserir("projectEnd", projetos.endDate)

const cursos = cv.courses[0]

inserir("courseName", cursos.name)
inserir("courseInstitution", cursos.institution)
inserir("completionDate", cursos.completionDate)
inserir("workloadHours", cursos.workloadHours)

const adicional = cv.additionalInformation

inserir("availability", adicional.availability)
inserir("workModel", adicional.workModel)
inserir("travelAvailability", adicional.travelAvailability ? "Sim" : "Não")
inserir("additionalNotes", adicional.additionalNotes)

const pref = cv.preferences

inserir("targetPositions", pref.targetPositions.join(", "))
inserir("targetIndustries", pref.targetIndustries.join(", "))
inserir("preferredLocations", pref.preferredLocations.join(", "))
inserir("preferredWorkModel", pref.preferredWorkModel)


