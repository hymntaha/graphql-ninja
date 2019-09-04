import gql from 'graphql';

const query = gql`
    query{
        users{
            id,
            name,
            car{
                id,
                make,
                model,
                color
            }
        }
    }
`;
