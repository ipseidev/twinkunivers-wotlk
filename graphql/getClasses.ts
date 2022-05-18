import {gql} from "@apollo/client";

export const getClasses = gql`
    query classes($locale:I18NLocaleCode) {
        classes(locale:$locale){
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
