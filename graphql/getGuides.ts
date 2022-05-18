import {gql} from "@apollo/client";

export const getGuides = gql`
    query guides($locale:I18NLocaleCode) {
        guides(locale:$locale, pagination: { start: 0, limit: 300 }){
            data{
                id
                attributes{
                    locale
                    description
                    classe{
                        data{
                            id,
                            attributes{
                                classe,
                                alliance,
                                horde,
                                alliance_horde,
                                best_race_horde{
                                    data{
                                        attributes{
                                            race
                                        }
                                    }
                                },
                                best_race_alliance{
                                    data{
                                        attributes{
                                            race
                                        }
                                    }
                                }
                            }
                        }
                    }
                    faction{
                        data{
                            id
                        }
                    }
                    tete{item, enchant, commentaire}
                    cou{item, enchant, commentaire}
                    epaule{item, enchant, commentaire}
                    cape{item, enchant, commentaire}
                    torse{item, enchant, commentaire}
                    brassards{item, enchant, commentaire}
                    gants{item, enchant, commentaire}
                    ceinture{item, enchant, commentaire}
                    pantalon{item, enchant, commentaire}
                    bottes{item, enchant, commentaire}
                    bague1{item, enchant, commentaire}
                    bague2{item, enchant, commentaire}
                    bijou1{item, enchant, commentaire}
                    bijou2{item, enchant, commentaire}
                    main_droite{item, enchant, commentaire}
                    main_gauche{item, enchant, commentaire}
                    distance{item, enchant, commentaire}


                }
            }
        }
    }
`
