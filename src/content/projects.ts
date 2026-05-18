import Drachma from "../assets/banners/drachma.webp"
import erpSimulator from "../assets/banners/erp_simulator.webp"
import pastelaria from "../assets/banners/pastelaria.webp"

export const projects = [
    {
        projectStart: "",
        projectEnd: "",
        banner: Drachma,
        inDevelopment: true,
        techUsed: ["react", "typescript"],

        content: {
            en: {
                name: "Drachma",
                description: "",
                headline: "A financial management system made for organizing your income, spendings and investments."
            },
            pt: {
                name: "Drachma",
                description: "",
                headline: "Um sistema de gestão financeira criado para organizar sua renda, despesas e investimentos."
            }
        }
    },
    {
        projectStart: "",
        projectEnd: "",
        banner: pastelaria,
        inDevelopment: false,
        techUsed: ["php", "html", "css", "SQL"],

        content: {
            en: {
                name: "Restaurant Management",
                description: "",
                headline: "A system capable of fully managing a restaurant, from stock control to order register"
            },
            pt: {
                name: "Gerenciamento de Pastelaria",
                description: "",
                headline: "Um sistema capaz de gerenciar completamente um restaurante, desde o controle de estoque até o registro de pedidos."
            }
        }
    },
    {
        projectStart: "",
        projectEnd: "",
        banner: erpSimulator,
        inDevelopment: false,
        techUsed: ["php", "html", "css", "SQL", "jQuery", "bootstrap"],

        content: {
            en: {
                name: "ERP Simulator",
                description: "",
                headline: "An ERP simulator that organizes the inventory and distribution process of industrial raw materials."
            },
            pt: {
                name: "Simulador de ERP",
                description: "",
                headline: "Um simulador de ERP que organiza o processo de estoque e distribuição de matérias-primas industriais."
            }
        }
    }
]