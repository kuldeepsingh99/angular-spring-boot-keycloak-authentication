import {KeycloakConfig} from 'keycloak-js'

const keycloakConfig: KeycloakConfig = {
    url: "http://localhost:8081",
    realm: "demo",
    clientId: "demo-client"
};

export default keycloakConfig;