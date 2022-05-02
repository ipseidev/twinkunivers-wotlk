import {gql} from "@apollo/client";

export const getClasses = gql`
    query classes {
        classes{
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
