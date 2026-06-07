import Drachma from "../assets/banners/drachma.webp"
import erpSimulator from "../assets/banners/erp_simulator.webp"
import pastelaria from "../assets/banners/pastelaria.webp"
import typeassist from "../assets/banners/typeassist.webp"

export const projects = [
    {
        projectStart: new Date(2024, 3),
        projectEnd: "",
        banner: Drachma,
        inDevelopment: true,
        codeIsPrivate: false,
        github: "https://github.com/Ailer-h/drachma",
        demo: "",
        techUsed: ["React.js", "Next.js", "Typescript"],

        content: {
            en: {
                name: "Drachma",
                description: "Drachma is a project created to fix a problem I had, which is that I never liked most of financial apps out there and was getting tired of using spreadsheets. The system will record not only how much you spend, but on what you spend and how you spend, helping you have more insights on your actual spending habits. Besides that, you'll be able to see your investments, your current balance and all your account activity in one dashboard, making it easier to control your financial life.",
                headline: "A financial management system made for organizing your income, spendings and investments."
            },
            pt: {
                name: "Drachma",
                description: "Drachma é um projeto criado para resolver um problema que eu tinha: nunca gostei da maioria dos aplicativos financeiros disponíveis e estava cansado de usar planilhas. O sistema registra não apenas quanto você gasta, mas também em que gasta e como gasta, ajudando você a ter uma visão mais clara dos seus hábitos de consumo. Além disso, você poderá visualizar seus investimentos, seu saldo atual e toda a atividade da sua conta em um único painel, facilitando o controle da sua vida financeira.",
                headline: "Um sistema de gestão financeira criado para organizar sua renda, despesas e investimentos."
            }
        }
    },
    {
        projectStart: new Date(2024, 3),
        projectEnd: new Date(2024, 5),
        banner: pastelaria,
        inDevelopment: false,
        codeIsPrivate: false,
        github: "https://github.com/Ailer-h/pastelaria",
        demo: "",
        techUsed: ["PHP", "HTML", "CSS", "SQL"],

        content: {
            en: {
                name: "Restaurant Management",
                description: "A management system for a restaurant, developed as part of an exercise proposed by SENAI for the completion of studies in the area of ​​databases. The application allows control of different sectors of the establishment, ranging from inventory management to order registration and tracking. The system has two access levels: an administrative profile, which has total control over the functionalities, and an employee profile, with limited permissions for specific operations. Technologies such as HTML, CSS, JavaScript, PHP, and SQL were used for the development of the platform.",
                headline: "A system capable of fully managing a restaurant, from stock control to order register"
            },
            pt: {
                name: "Gerenciamento de Pastelaria",
                description: "Um sistema de gerenciamento para uma pastelaria, desenvolvido como parte de um exercício proposto pelo SENAI para a conclusão dos estudos na área de banco de dados. A aplicação permite controlar diferentes setores do estabelecimento, abrangendo desde o gerenciamento de estoque até o registro e acompanhamento de pedidos. O sistema conta com dois níveis de acesso: um perfil administrativo, que possui controle total sobre as funcionalidades, e um perfil de funcionário, com permissões limitadas para operações específicas. Para o desenvolvimento da plataforma foram utilizadas tecnologias como HTML, CSS, JavaScript, PHP e SQL.",
                headline: "Um sistema capaz de gerenciar completamente um restaurante, desde o controle de estoque até o registro de pedidos."
            }
        }
    },
    {
        projectStart: new Date(2024, 8),
        projectEnd: new Date(2024, 9),
        banner: erpSimulator,
        inDevelopment: false,
        codeIsPrivate: false,
        github: "https://github.com/Ailer-h/erp_logistica",
        demo: "",
        techUsed: ["PHP", "HTML", "CSS", "SQL", "jQuery", "Bootstrap"],

        content: {
            en: {
                name: "ERP Simulator",
                description: "An ERP (Enterprise Resource Planning) simulator developed in partnership between the Systems Development and Logistics classes as part of a final academic presentation. The system was created to manage the inventory of fictitious companies, allowing product control, purchase order creation, and authorization for goods to enter the stock. Each company has its own independent login, ensuring that the information from one profile does not interfere with the others. Technologies such as HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, and SQL were used in the application's development.",
                headline: "An ERP simulator that organizes the inventory and distribution process of industrial raw materials."
            },
            pt: {
                name: "Simulador de ERP",
                description: "Um simulador de ERP (Enterprise Resource Planning) desenvolvido em parceria entre as turmas de Desenvolvimento de Sistemas e Logística como parte de uma apresentação final acadêmica. O sistema foi criado para gerenciar o estoque de empresas fictícias, permitindo o controle de produtos, criação de notas de pedido e autorização de entrada de mercadorias no estoque. Cada empresa possui um login próprio e independente, garantindo que as informações de um perfil não interfiram nos demais. Para o desenvolvimento da aplicação foram utilizadas tecnologias como HTML, CSS, Bootstrap, JavaScript, JQuery, PHP e SQL.",
                headline: "Um simulador de ERP que organiza o processo de estoque e distribuição de matérias-primas industriais."
            }
        }
    },
    {
        projectStart: new Date(2025, 5),
        projectEnd: new Date(2026, 2),
        banner: typeassist,
        inDevelopment: false,
        codeIsPrivate: true,
        github: "",
        demo: "",
        techUsed: ["Python", "PyAutoGUI"],

        content: {
            en: {
                name: "Typeassist",
                description: "TypeAssist is an automation tool developed in Python focused on optimizing large-scale enterprise support processes. Built using libraries such as PyAutoGUI and Pyperclip, and an architecture based on Object-Oriented Programming (OOP), the system was created to automate repetitive tasks related to ticket management at Kyndryl. The application was capable of processing more than 75 tickets daily, contributing to an approximately 40% reduction in Average Handling Time (AHT). Its main features included automatic description completion, automated ticket submission, SLA tracking, and other routines that significantly streamlined the operational support workflow.",
                headline: "Intelligent automation of corporate tickets using Python to optimize support flows, resulting in a 40% reduction in service time."
            },
            pt: {
                name: "Typeassist",
                description: "O TypeAssist é uma ferramenta de automação desenvolvida em Python com foco na otimização de processos de suporte empresarial em larga escala. Construído utilizando bibliotecas como PyAutoGUI e Pyperclip, além de uma arquitetura baseada em Programação Orientada a Objetos (POO), o sistema foi criado para automatizar tarefas repetitivas relacionadas ao gerenciamento de tickets na Kyndryl. A aplicação era capaz de processar mais de 75 tickets diariamente, contribuindo para uma redução de aproximadamente 40% no Tempo Médio de Atendimento (TMA). Entre suas principais funcionalidades estavam o preenchimento automático de descrições, envio automatizado de tickets, rastreamento de SLA e outras rotinas que agilizaram significativamente o fluxo operacional de suporte.",
                headline: "Automação inteligente de tickets corporativos com Python para otimizar fluxos de suporte que reduziu 40% do tempo de atendimento."
            }
        }
    }
]