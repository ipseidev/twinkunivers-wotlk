import {gql} from "@apollo/client";

export const getFactions =  gql`
    query factions($locale:I18NLocaleCode) {
        factions(locale:$locale, pagination: { start: 0, limit: 300 }){
            data{
                id
                attributes{
                    faction
                    icon{
                        data{
                            attributes{
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`
