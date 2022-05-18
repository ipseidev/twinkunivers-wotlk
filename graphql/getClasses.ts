import {gql} from "@apollo/client";

export const getClasses = gql`
    query classes($locale:I18NLocaleCode) {
        classes(locale:$locale, pagination: { start: 0, limit: 300 }){
            data{
                id
                attributes{

                    classe
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
