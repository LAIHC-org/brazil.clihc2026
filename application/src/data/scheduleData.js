export const SessionType = {
    REGISTRATION: 'registration',
    KEYNOTE: 'keynote',
    WORKSHOP: 'workshop',
    TUTORIAL: 'tutorial',
    PANEL: 'panel',
    PAPER_SESSION: 'paper_session',
    BREAK: 'break',
    LUNCH: 'lunch',
    COMPETITION: 'competition',
    COLLOQUIUM: 'colloquium',
    NETWORKING: 'networking',
    OTHER: 'other'
}

export const scheduleData = {
    edition: 'CLIHC 2026 - Brazil',
    venue: 'Aracaju, Sergipe, Brazil',
    timezone: 'BRT (UTC-3)',
    days: [
        {
            id: 'day1',
            date: '2026-05-06',
            label: {
                en: 'May 6, 2026 (Wednesday)',
                pt: '6 de maio de 2026 (quarta-feira)',
                es: '6 de mayo de 2026 (miércoles)'
            },
            timeSlots: [
                {
                    time: '08:00 - 08:30',
                    sessions: [
                        {
                            location: 'Hall',
                            type: SessionType.REGISTRATION,
                            title: {
                                en: 'Welcoming & Registration',
                                pt: 'Acolhimento & Credenciamento',
                                es: 'Bienvenida y Registro'
                            }
                        }
                    ]
                },
                {
                    time: '08:30 - 10:00',
                    sessions: [
                        {
                            location: 'Room 1 (Rio Poxim)',
                            type: SessionType.WORKSHOP,
                            tag: {
                                en: 'Workshop',
                                pt: 'Workshop',
                                es: 'Workshop'
                            },
                            title: {
                                en: "Cultures, Otherness, and Participation in HCI (CAPA'2026)",
                                pt: "Culturas, Alteridade e Participação em IHC (CAPA'2026)",
                                es: "Culturas, Otredad y Participación en IHC (CAPA'2026)"
                            }
                        }
                    ]
                },
                {
                    time: '10:00 - 10:30',
                    sessions: [
                        {
                            location: 'Hall',
                            type: SessionType.BREAK,
                            title: {
                                en: 'Coffee Break',
                                pt: 'Coffee Break',
                                es: 'Pausa para café'
                            }
                        }
                    ]
                },
                {
                    time: '10:30 - 12:00',
                    sessions: [
                        {
                            location: 'Room 1 (Rio Poxim)',
                            type: SessionType.WORKSHOP,
                            tag: {
                                en: 'Workshop',
                                pt: 'Workshop',
                                es: 'Workshop'
                            },
                            title: {
                                en: "Cultures, Otherness, and Participation in HCI (CAPA'2026)",
                                pt: "Culturas, Alteridade e Participação em IHC (CAPA'2026)",
                                es: "Culturas, Otredad y Participación en IHC (CAPA'2026)"
                            },
                            continuation: true
                        }
                    ]
                },
                {
                    time: '12:00 - 14:00',
                    sessions: [
                        {
                            location: 'Hall',
                            type: SessionType.LUNCH,
                            title: {
                                en: 'Lunch',
                                pt: 'Almoço',
                                es: 'Almuerzo'
                            }
                        }
                    ]
                },
                {
                    time: '13:00 - 14:00',
                    sessions: [
                        {
                            location: 'Online',
                            type: SessionType.TUTORIAL,
                            tag: {
                                en: 'BR-CHI Tutorial',
                                pt: 'Tutorial BR-CHI',
                                es: 'Tutorial BR-CHI'
                            },
                            title: {
                                en: 'Research on HCI',
                                pt: 'Pesquisa em IHC',
                                es: 'Investigación en IHC'
                            },
                            subtitle: {
                                en: 'Brazilian SIGCHI Chapter - BR-CHI',
                                pt: 'Capítulo Brasileiro da SIGCHI - BR-CHI',
                                es: 'Capítulo Brasileño de SIGCHI - BR-CHI'
                            }
                        }
                    ]
                },
                {
                    time: '14:00 - 15:30',
                    sessions: [
                        {
                            location: 'Room 1 (Rio Poxim)',
                            type: SessionType.WORKSHOP,
                            tag: {
                                en: 'Workshop',
                                pt: 'Workshop',
                                es: 'Workshop'
                            },
                            title: {
                                en: "Cultures, Otherness, and Participation in HCI (CAPA'2026)",
                                pt: "Culturas, Alteridade e Participação em IHC (CAPA'2026)",
                                es: "Culturas, Otredad y Participación en IHC (CAPA'2026)"
                            },
                            continuation: true
                        },
                        {
                            location: 'Online',
                            type: SessionType.TUTORIAL,
                            tag: {
                                en: 'BR-CHI Tutorial',
                                pt: 'Tutorial BR-CHI',
                                es: 'Tutorial BR-CHI'
                            },
                            title: {
                                en: 'Research on HCI',
                                pt: 'Pesquisa em IHC',
                                es: 'Investigación en IHC'
                            },
                            subtitle: {
                                en: 'Brazilian SIGCHI Chapter - BR-CHI',
                                pt: 'Capítulo Brasileiro da SIGCHI - BR-CHI',
                                es: 'Capítulo Brasileño de SIGCHI - BR-CHI'
                            },
                            continuation: true
                        }
                    ]
                },
                {
                    time: '15:30 - 16:00',
                    sessions: [
                        {
                            location: 'Online',
                            type: SessionType.TUTORIAL,
                            tag: {
                                en: 'BR-CHI Tutorial',
                                pt: 'Tutorial BR-CHI',
                                es: 'Tutorial BR-CHI'
                            },
                            title: {
                                en: 'Research on HCI',
                                pt: 'Pesquisa em IHC',
                                es: 'Investigación en IHC'
                            },
                            subtitle: {
                                en: 'Brazilian SIGCHI Chapter - BR-CHI',
                                pt: 'Capítulo Brasileiro da SIGCHI - BR-CHI',
                                es: 'Capítulo Brasileño de SIGCHI - BR-CHI'
                            },
                            continuation: true
                        },
                        {
                            location: 'Hall',
                            type: SessionType.BREAK,
                            title: {
                                en: 'Coffee Break',
                                pt: 'Coffee Break',
                                es: 'Pausa para café'
                            }
                        }
                    ]
                },
                {
                    time: '16:00 - 18:00',
                    sessions: [
                        {
                            location: 'Auditorium',
                            type: SessionType.KEYNOTE,
                            tag: {
                                en: 'Keynote',
                                pt: 'Palestra Principal',
                                es: 'Ponencia Principal'
                            },
                            title: {
                                en: 'Opening & Invited Keynote Speaker',
                                pt: 'Abertura & Palestrante Principal Convidado',
                                es: 'Apertura y Ponente Principal Invitado'
                            },
                            speaker: 'Dr. Pedro Reynolds-Cuéllar',
                            speakerId: 'pedro-reynolds'
                        }
                    ]
                }
            ]
        },
        {
            id: 'day2',
            date: '2026-05-07',
            label: {
                en: 'May 7, 2026 (Thursday)',
                pt: '7 de maio de 2026 (quinta-feira)',
                es: '7 de mayo de 2026 (jueves)'
            },
            timeSlots: [
                {
                    time: '08:00 - 08:30',
                    sessions: [
                        {
                            location: 'Hall',
                            type: SessionType.REGISTRATION,
                            title: {
                                en: 'Welcoming & Registration',
                                pt: 'Acolhimento & Credenciamento',
                                es: 'Bienvenida y Registro'
                            }
                        }
                    ]
                },
                {
                    time: '08:30 - 10:00',
                    sessions: [
                        {
                            location: 'Room 1 (Rio Poxim)',
                            type: SessionType.PAPER_SESSION,
                            tag: 'TS1',
                            title: {
                                en: 'Technical Session 1',
                                pt: 'Sessão Técnica 1',
                                es: 'Sesión Técnica 1'
                            },
                            chair: 'Dr. Gilton Ferreira',
                            papers: [
                                {
                                    time: '08:30 - 08:50',
                                    title: 'Microinterações Emocionais no Design de Interfaces para Formação de Hábitos de Bem-Estar: Contribuições da IHC à Transformação Digital',
                                    authors: 'Stheffany Santos (Tiradentes), Ana Carla do Nascimento Santos (Unit), Joao Vitor Rezende Moura (Unit), Layse Santos Souza (UFS)'
                                },
                                {
                                    time: '08:50 - 09:10',
                                    title: 'The Instrumental Sense: A Netnographic Framework for Understanding Digital Companionship',
                                    authors: 'Gustavo Souto (USP), Carlos H. Morimoto (University of São Paulo)'
                                },
                                {
                                    time: '09:10 - 09:30',
                                    title: 'Ethical Principles Application in the Development of AI Systems: a Systematic Mapping Study',
                                    authors: 'Helena Martins (UFV), Cristiane Aparecida Lana (UFLA), Maria Lucia Bento Villela (UFV)'
                                },
                                {
                                    time: '09:30 - 09:45',
                                    title: 'Aplicação de Diretrizes de Acessibilidade em Apps para Pessoas com TEA: Desafios e Lições Aprendidas',
                                    authors: 'Marina Carvalho (UFPB), Helena Souto (UFPB), Thais Brito (Universidade Federal da Paraiba and Centro Universitário de João Pessoa), Augusto Henrique (UFPB), Yuska Paola Costa Aguiar (UFPB), Danielle Rousy Dias Ricarte (UFPB)'
                                },
                                {
                                    time: '09:45 - 10:00',
                                    title: 'Sistema de Imitação via Visão Computacional aplicado a um Braço Robótico de baixo custo para fins educacionais',
                                    authors: 'Breno Fontes (IFS), Phillipe Santos (IFS), Samyr Cunha (IFS), Laís Santos (IFS), Diego Gama (IFS), Thiago Dos Santos (IFS), willian santos mota (Instituto Federal de Sergipe/Campus Lagarto), João Pedro Santana Silva Santos (IFS)'
                                }
                            ]
                        },
                        {
                            location: 'Room 2 (Rio Fundo)',
                            type: SessionType.COMPETITION,
                            tag: {
                                en: 'SDC',
                                pt: 'CDE',
                                es: 'CDE'
                            },
                            title: {
                                en: 'Student Design Competition',
                                pt: 'Competição de Design Estudantil',
                                es: 'Competición de Diseño Estudiantil'
                            }
                        }
                    ]
                },
                {
                    time: '10:00 - 10:30',
                    sessions: [
                        {
                            location: 'Hall',
                            type: SessionType.BREAK,
                            title: {
                                en: 'Coffee Break & Poster Session',
                                pt: 'Coffee Break & Sessão de Pôsteres',
                                es: 'Pausa para café y Sesión de Pósters'
                            }
                        }
                    ]
                },
                {
                    time: '10:30 - 12:00',
                    sessions: [
                        {
                            location: 'Auditorium',
                            type: SessionType.KEYNOTE,
                            tag: {
                                en: 'Keynote',
                                pt: 'Palestra Principal',
                                es: 'Ponencia Principal'
                            },
                            title: {
                                en: 'Invited Keynote Speaker',
                                pt: 'Palestrante Principal Convidada',
                                es: 'Ponente Principal Invitada'
                            },
                            speaker: 'Dra. Luciana Zaina',
                            speakerId: 'luciana-zaina'
                        }
                    ]
                },
                {
                    time: '12:00 - 13:30',
                    sessions: [
                        {
                            location: 'Hall',
                            type: SessionType.LUNCH,
                            title: {
                                en: 'Lunch',
                                pt: 'Almoço',
                                es: 'Almuerzo'
                            }
                        }
                    ]
                },
                {
                    time: '13:30 - 15:30',
                    sessions: [
                        {
                            location: 'Auditorium',
                            type: SessionType.PANEL,
                            tag: {
                                en: 'Panel',
                                pt: 'Painel',
                                es: 'Panel'
                            },
                            title: {
                                en: 'Relationship of the Sergipe Game Developers Association with Industry and Academia',
                                pt: 'Relação da Associação de Desenvolvedores de Jogos de Sergipe com Indústria e Academia',
                                es: 'Relación de la Asociación de Desarrolladores de Juegos de Sergipe con la Industria y la Academia'
                            },
                            panelists: [
                                'Gilvanda Moura',
                                'Daniel Caldas',
                                'Prof. Dr. Victor F. A. Araujo',
                                'Artur Koszman'
                            ],
                            moderator: 'Prof. Yago Oliveira'
                        },
                        {
                            location: 'Room 1 (Rio Poxim)',
                            type: SessionType.COLLOQUIUM,
                            tag: {
                                en: 'GC',
                                pt: 'CG',
                                es: 'CG'
                            },
                            title: {
                                en: 'Graduate Colloquium',
                                pt: 'Colóquio de Pós-Graduação',
                                es: 'Coloquio de Posgrado'
                            }
                        }
                    ]
                },
                {
                    time: '15:30 - 16:00',
                    sessions: [
                        {
                            location: 'Hall',
                            type: SessionType.BREAK,
                            title: {
                                en: 'Coffee Break',
                                pt: 'Coffee Break',
                                es: 'Pausa para café'
                            }
                        }
                    ]
                },
                {
                    time: '16:00 - 17:30',
                    sessions: [
                        {
                            location: 'Auditorium',
                            type: SessionType.PANEL,
                            tag: {
                                en: 'Panel',
                                pt: 'Painel',
                                es: 'Panel'
                            },
                            title: {
                                en: 'Relationship between Companies and Academia (Neuroverse, LookInside and Ada)',
                                pt: 'Relação de Empresas com Academia (Neuroverse, LookInside e Ada)',
                                es: 'Relación de Empresas con la Academia (Neuroverse, LookInside y Ada)'
                            },
                            panelists: [
                                'Alana Vasconcelos',
                                'Hermilio Carvalho Junior',
                                'Igor Libertador',
                                'Luiz Gomes',
                                'Welerson Melo'
                            ],
                            moderator: 'Prof. Dr. Victor F. A. Araújo e Prof. Dr. Igor Libertador'
                        },
                        {
                            location: 'Room 1 (Rio Poxim)',
                            type: SessionType.PAPER_SESSION,
                            tag: 'TS2',
                            title: {
                                en: 'Technical Session 2',
                                pt: 'Sessão Técnica 2',
                                es: 'Sesión Técnica 2'
                            },
                            chair: 'Dra. Valéria Queiroz',
                            papers: [
                                {
                                    time: '16:00 - 16:20',
                                    title: 'Computação Criativa e Inclusão na Educação: Aprendizagem Interativa com Interfaces Tangíveis',
                                    authors: 'Alisson Lima (IFMS), Leandro Soares Guedes (IFMS)'
                                },
                                {
                                    time: '16:20 - 16:40',
                                    title: 'Using participatory design to develop communication-supporting technology: A scoping review',
                                    authors: 'Rafiah Ansari (Federation University), Soraya Anvari (Dalhousie University), Lizbeth Escobedo (Dalhousie University, Faculty of Computer Science), Rina Wehbe'
                                },
                                {
                                    time: '16:40 - 17:00',
                                    title: 'Digital Mediation of Spiritual Experiences: Sense-Making Through Story Completion',
                                    authors: 'Jean Rosa (UNINASSAU-AJU), Whendell Matheus Chagas Lopes (UNINASSAU-AJU), Isabela Arruda (UFG), Sara Wolf (PsyErgo)'
                                },
                                {
                                    time: '17:00 - 17:15',
                                    title: 'Deepfakes pornográficos, soberania digital e violência contra mulheres: desafios para a América Latina',
                                    authors: 'Cléo Cunha Peixoto (UFRJ), Claudia Motta (UFRJ), Pedro Nuno Moura (UNIRIO)'
                                },
                                {
                                    time: '17:15 - 17:30',
                                    title: 'Codesign da Plataforma Livre Nação Yuxibu com o Povo indigena Huni Kuĩ: desafios e reflexões iniciais',
                                    authors: 'Tulio Augustus Santos Viana (UFBA), Diego Zabot (UFBA), Valéria Argolo Rosa (UESB), Solon Dutra (UFBA), Débora Abdalla (UFBA)'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'day3',
            date: '2026-05-08',
            label: {
                en: 'May 8, 2026 (Friday)',
                pt: '8 de maio de 2026 (sexta-feira)',
                es: '8 de mayo de 2026 (viernes)'
            },
            timeSlots: [
                {
                    time: '08:00 - 08:30',
                    sessions: [
                        {
                            location: 'Hall',
                            type: SessionType.REGISTRATION,
                            title: {
                                en: 'Welcoming & Registration',
                                pt: 'Acolhimento & Credenciamento',
                                es: 'Bienvenida y Registro'
                            }
                        }
                    ]
                },
                {
                    time: '08:30 - 10:00',
                    sessions: [
                        {
                            location: 'Auditorium',
                            type: SessionType.KEYNOTE,
                            tag: {
                                en: 'Keynote',
                                pt: 'Palestra Principal',
                                es: 'Ponencia Principal'
                            },
                            title: {
                                en: 'Invited Keynote Speaker',
                                pt: 'Palestrante Principal Convidada',
                                es: 'Ponente Principal Invitada'
                            },
                            speaker: 'Dra. Ann Blandford',
                            speakerId: 'ann-blandford'
                        }
                    ]
                },
                {
                    time: '10:00 - 10:30',
                    sessions: [
                        {
                            location: 'Hall',
                            type: SessionType.BREAK,
                            title: {
                                en: 'Coffee Break',
                                pt: 'Coffee Break',
                                es: 'Pausa para café'
                            }
                        }
                    ]
                },
                {
                    time: '10:30 - 12:00',
                    sessions: [
                        {
                            location: 'Auditorium',
                            type: SessionType.PANEL,
                            tag: {
                                en: 'BR-CHI Panel',
                                pt: 'Painel BR-CHI',
                                es: 'Panel BR-CHI'
                            },
                            title: {
                                en: 'Latin American Collaboration for HCI',
                                pt: 'Colaboração Latino-Americana para IHC',
                                es: 'Colaboración Latinoamericana para IHC'
                            },
                            subtitle: 'BR-CHI'
                        }
                    ]
                },
                {
                    time: '12:00 - 14:00',
                    sessions: [
                        {
                            location: 'Hall',
                            type: SessionType.LUNCH,
                            title: {
                                en: 'Lunch',
                                pt: 'Almoço',
                                es: 'Almuerzo'
                            }
                        }
                    ]
                },
                {
                    time: '14:00 - 15:30',
                    sessions: [
                        {
                            location: 'Auditorium',
                            type: SessionType.PAPER_SESSION,
                            tag: {
                                en: 'TS3 - Best Papers',
                                pt: 'ST3 - Melhores Artigos',
                                es: 'ST3 - Mejores Artículos'
                            },
                            title: {
                                en: 'Technical Session 3 - Best Papers',
                                pt: 'Sessão Técnica 3 - Melhores Artigos',
                                es: 'Sesión Técnica 3 - Mejores Artículos'
                            },
                            chair: 'Dr. Jean Rosa',
                            papers: [
                                {
                                    time: '14:00 - 14:20',
                                    title: 'What literature debate is not what professionals say about Measuring the ROI of UX Design',
                                    authors: 'Gessé Pereira (UFSCAR), Luciana Zaina (UFSCAR)'
                                },
                                {
                                    time: '14:20 - 14:40',
                                    title: 'Co-criação, Expressão Criativa e Inteligência Artificial na Inclusão de Pessoas com Deficiência - Intelectual',
                                    authors: 'Nureen Centurión, Valeria Rogoski, Rafael Roa, Leandro Soares Guedes (IFMS)'
                                },
                                {
                                    time: '14:40 - 15:00',
                                    title: 'Pseudo-haptic interaction on touchscreen devices using pens: a systematic literature mapping',
                                    authors: 'Amanda Carolyne de Lima (UTFPR), Cleber Gimenez Correa (UTFPR), Diego Marczal (UTFPR)'
                                },
                                {
                                    time: '15:00 - 15:20',
                                    title: 'Plataformas Big Data e Design Centrado no Usuário: Um Estudo sobre a (omitido para submissão)',
                                    authors: 'Georgia da Cruz Pereira (UFC), Leonara Braz (Universidade Federal do Ceará UFC), Maria Letícia Barros Nepomuceno (UFC), Israel Filho, Felipe Sampaio do Nascimento Melquíades (UFC), Rossana Maria de Castro Andrade (UFC), Jose Antonio Macêdo (Federal University of Ceará)'
                                }
                            ]
                        }
                    ]
                },
                {
                    time: '15:30 - 16:00',
                    sessions: [
                        {
                            location: 'Hall',
                            type: SessionType.BREAK,
                            title: {
                                en: 'Coffee Break',
                                pt: 'Coffee Break',
                                es: 'Pausa para café'
                            }
                        }
                    ]
                },
                {
                    time: '16:00 - 17:30',
                    sessions: [
                        {
                            location: 'Auditorium',
                            type: SessionType.PANEL,
                            tag: {
                                en: 'Keynote Panel',
                                pt: 'Painel Keynote',
                                es: 'Panel Keynote'
                            },
                            title: {
                                en: 'HCI for a Responsible Dialogue between the Human, the Natural, and the Digital',
                                pt: 'IHC para um Diálogo Responsável entre o Humano, o Natural e o Digital',
                                es: 'IHC para un Diálogo Responsable entre lo Humano, lo Natural y lo Digital'
                            },
                            description: {
                                en: 'Panel with the Invited Keynote Speakers',
                                pt: 'Painel com os Palestrantes Principais Convidados',
                                es: 'Panel con los Ponentes Principales Invitados'
                            },
                            moderator: 'Dra. Soraia Prietch'
                        }
                    ]
                }
            ]
        }
    ]
}
