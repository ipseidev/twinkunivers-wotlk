import {gql} from "@apollo/client";

export const getFactions =  gql`
    query factions {
        factions{
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
