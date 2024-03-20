// Plaats dit bestand op een centrale locatie voor hergebruik in meerdere documenten.
var organisationConfig = {
    nl_organisationName: "Logius",
    nl_organisationStylesURL: "https://gitdocumentatie.logius.nl/publicatie/respec/style/",
    nl_organisationPublishURL: "https://gitdocumentatie.logius.nl/publicatie/",
    logos: [{
        src: "https://gitdocumentatie.logius.nl/publicatie/respec/style/logos/figure-logius.svg",
        alt: "Logius",
        id: "Logius",
        height: 77,
        width: 44,
        url: "https://www.logius.nl/standaarden",
    }],

    latestVersion: ["nl_organisationPublishURL", "pubDomain", "/", "shortName"],
    thisVersion: ["nl_organisationPublishURL", "pubDomain", "/", "shortName", "/", "publishVersion"],
    prevVersion: ["nl_organisationPublishURL", "pubDomain", "/", "shortName", "/", "previousPublishVersion"],
    useLogo: true,
    useLabel: true,

    license: "cc-by",
    addSectionLinks: true,

    localizationStrings: {
        en: {
            wv: "Draft",
            cv: "Consultation version",
            vv: "Proposed version",
            def: "Definitive version",
            basis: "Document",
            eo: "Outdated version",
            tg: "Rescinded version",
            no: "Norm",
            st: "Standard",
            im: "Information model",
            pr: "Guideline",
            hr: "Guide",
            wa: "Proposed recommendation",
            al: "General",
            bd: "Governance documentation",
            bp: "Best practice",
        },
        nl: {
            wv: "Werkversie",
            cv: "Consultatieversie",
            vv: "Versie ter vaststelling",
            def: "Vastgestelde versie",
            basis: "Document",
            eo: "Verouderde versie",
            tg: "Teruggetrokken versie",
            no: "Norm",
            st: "Standaard",
            im: "Informatiemodel",
            pr: "Praktijkrichtlijn",
            hr: "Handreiking",
            wa: "Werkafspraak",
            al: "Algemeen",
            bd: "Beheerdocumentatie",
            bp: "Best practice",
        },
    },

    sotdText: {
        nl: {
            sotd: "Status van dit document",
            def: `Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen door het TO goedgekeurde consultatieversie.`,
            cv: `Dit is een door het TO goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar digikoppeling@logius.nl`,
            vv: `Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            basis: "Dit is een document zonder officiële status.",
        },
        en: {
            sotd: "Status of This Document",
            def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
            wv: `This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by TO.`,
            cv: `This is a proposed recommendation approved by TO. Comments regarding this document may be sent to api@logius.nl`,
            vv: `This is the definitive concept of this document. Edits resulting from consultations have been applied.`,
            basis: "This document has no official standing.",
        },
    },

    labelColor: {
        def: "#154273",
        wv: "#39870c",
        cv: "#000000",
        vv: "#000000",
    },
    licenses: {
        cc0: {
            name: "Creative Commons 0 Public Domain Dedication",
            short: "CC0",
            url: "https://creativecommons.org/publicdomain/zero/1.0/",
            image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-zero.svg",
        },
        "cc-by": {
            name: "Creative Commons Attribution 4.0 International Public License",
            short: "CC-BY",
            url: "https://creativecommons.org/licenses/by/4.0/legalcode",
            image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-by.svg",
        },
        "cc-by-nd": {
            name: "Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",
            short: "CC-BY-ND",
            url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
            image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-by-nd.svg",
        },
    },

    localBiblio: {
        "ADR": {
            authors: ["Jasper Roes", "Joost Farla"],
            date: "Juli 2020",
            href: "https://gitdocumentatie.logius.nl/publicatie/api/adr/",
            publisher: "Logius",
            title: "API Design Rules (Nederlandse API Strategie IIa)"
        },
        "ADR-ext": {
            authors: ["Jasper Roes", "Linda van den Brink"],
            date: "Januari 2020",
            href: "https://docs.geostandaarden.nl/api/API-Strategie-ext",
            publisher: "Geonovum/Kennisplatform APi's",
            title: "API Designrules Extensions (Nederlandse API Strategie IIb)"
        },
        "Algemene Voorwaarden Logius": {
            date: "12 juni 2018",
            href: "https://www.logius.nl/onze-organisatie/zakendoen-met-logius/voorwaarden/algemene-voorwaarden-logius",
            publisher: "Logius",
            title: "Algemene voorwaarden Logius"
        },
        "BCP195": {
            authors: ["Y. Sheffer", "R. Holz", "P. Saint-Andre"],
            date: "May 2015",
            href: "https://tools.ietf.org/html/bcp195",
            publisher: "IETF",
            title: "Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)"
        },
        "DK-beveiliging": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/beveilig/",
            publisher: "Logius",
            title: "Digikoppeling Beveiligingsstandaarden en voorschriften"
        },
        "CloudEvents": {
            authors: ["@@@"],
            date: "May 2011",
            href: "https://github.com/cloudevents/spec/blob/v1.0.1/spec.md",
            publisher: "@@@",
            title: "CloudEvents - Version 1.0.1"
        },
        "NLGOV-CloudEvents": {
            authors: ["Werkgroep Berichtenstandaard (Project Notificatieservices)"],
            href: "https://logius-standaarden.github.io/NL-GOV-profile-for-CloudEvents/",
            publisher: "Logius",
            title: "NL GOV profile for CloudEvents"
        },
        "DK-CV": {
            href: "https://gitlab.com/logius/digikoppeling-compliance",
            publisher: "Logius",
            title: "Digikoppeling Compliance Voorziening"
        },
        "Deployment Guide 1.1": {
            authors: ["Pete Wenzel", "Jacques Durand"],
            date: "June 2005",
            href: "http://www.oasis-open.org/apps/org/workgroup/ebxml-iic-deployment-profile-template-intro-100406.doc",
            publisher: "OASIS",
            title: "Deployment Profile Template For OASIS ebXML Message Service 2.0"
        },
        "DK": {
            href: "https://www.logius.nl/domeinen/gegevensuitwisseling/digikoppeling",
            publisher: "Logius",
            title: "Digikoppeling"
        },
        "DK-Doc": {
            href: "https://www.logius.nl/domeinen/gegevensuitwisseling/digikoppeling/documentatie",
            publisher: "Logius",
            title: "Digikoppeling documentatie"
        },
        "DK-Beheermodel": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/beheer/",
            publisher: "Logius",
            title: "Digikoppeling Beheermodel"
        },
        "DK-BPebMS": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/bpebms/",
            publisher: "Logius",
            title: "Digikoppeling Best Practices ebMS2"
        },
        "DK-BPGB": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/bpgb/",
            publisher: "Logius",
            title: "Digikoppeling Best Practices Grote Berichten"
        },
        "DK-BPWUS": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/bpwus/",
            publisher: "Logius",
            title: "Digikoppeling Best Practices WUS"
        },
        "DK-Beveiliging": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/beveilig/",
            publisher: "Logius",
            title: "Digikoppeling Beveiligingsstandaarden en voorschriften"
        },
        "DK-gbachtcert": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/ebms/",
            publisher: "Logius",
            title: "Digikoppeling Koppelvlakstandaard ebMS2"
        },
        "DK-ebMS": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/ebms/",
            publisher: "Logius",
            title: "Digikoppeling Koppelvlakstandaard ebMS2"
        },
        "DK-GB": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/gb/",
            publisher: "Logius",
            title: "Digikoppeling Koppelvlakstandaard Grote Berichten"
        },
        "DK-WUS": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/wus/",
            publisher: "Logius",
            title: "Digikoppeling Koppelvlakstandaard WUS"
        },
        "DK-RESTAPI": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/restapi/",
            publisher: "Logius",
            title: "Digikoppeling Koppelvlakstandaard REST-API"
        },
        "DK-Architectuur": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/architectuur/",
            publisher: "Logius",
            title: "Digikoppeling Architectuur"
        },
        "DK-IDAuth": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/idauth/",
            publisher: "Logius",
            title: "Digikoppeling Identificatie en Authenticatie"
        },
        "DK-WI": {
            href: "https://gitdocumentatie.logius.nl/publicatie/dk/watisdk/",
            publisher: "Logius",
            title: "Wat is Digikoppeling?"
        },
        "ebCPP": {
            authors: ["Oasis"],
            date: "september 2002",
            href: "http://www.ebxml.org/specs/ebcpp-2.0.pdf",
            publisher: "Oasis",
            title: "Collaboration-Protocol Profile and Agreement Specification Version 2.0"
        },
        "ebMS3": {
            authors: ["Ian Jones", "Pete Wenzel"],
            date: "October 2007",
            href: "https://docs.oasis-open.org/ebxml-msg/ebms/v3.0/core/os/ebms_core-3.0-spec-os.html",
            publisher: "Oasis",
            title: "Collaboration-Protocol Profile and Agreement Specification Version 2.0"
        },
        "eDelivery API4IPS": {
            authors: ["J. Dimitriou, V. Veduta, B. Dumitriu"],
            date: "sept 8 2022",
            href: "https://ec.europa.eu/digital-building-blocks/wikis/display/EDELCOMMUNITY/Project+deliverables",
            publisher: "OpenID foundation",
            title: "(ISA2).(eDelivery).(Piloting a REST API extension of CEF eDelivery).(ISA² IPS REST API Profile).(v1.0).pdf"
        },
        "Expert": {
            authors: ["@@@"],
            date: "@@@",
            href: "https://www.forumstandaardisatie.nl/sites/bfs/files/@@@.pdf",
            publisher: "Forum Standaardisatie",
            title: "Expertadvies CloudEvents 1.0"
        },
        folmer2011: {
            title: "Management and Development Model for Open Standards (BOMOS) version 2",
            keywords: "IR-76837",
            authors: ["ErwinFolmer", "Matthijs Punter"],
            date: "2011",
            language: "English",
            publisher: "Programmabureau NOiV",
        },
        folmer2012: {
            href: "https://ris.utwente.nl/ws/portalfiles/portal/6064223/thesis_E_Folmer.pdf",
            title: "Quality of Semantic Standards",
            authors: ["Erwin Folmer"],
            date: "2012",
            publisher: "Universiteit Twente",
        },
        "DK-Gebruiksvoorwaarden": {
            date: "1 januari 2021",
            href: "https://www.logius.nl/domeinen/gegevensuitwisseling/digikoppeling/documentatie/gebruiksvoorwaarden-digikoppeling",
            publisher: "Logius",
            title: "Gebruiksvoorwaarden Digikoppeling"
        },
        "Geospatial Module": {
            authors: ["L. van den Brink, P. Bresters, P. van Genuchten, G. Mathijssen, M. Strijker"],
            date: "23 mei 2021",
            href: "https://docs.geostandaarden.nl/api/API-Strategie-mod-geo/",
            publisher: "Geonovum",
            title: "API Design rules Module: Geospatial"
        },
        "HTTPS-factsheet NCSC": {
            date: "Nov 2014",
            href: "https://www.ncsc.nl/documenten/factsheets/2019/juni/01/factsheet-https-kan-een-stuk-veiliger",
            publisher: "NCSC",
            title: "Factsheet HTTPS kan een stuk veiliger"
        },
        "iGOV.OpenID": {
            authors: ["M. Varley, P. Grassi"],
            date: "October 5 2018",
            href: "https://openid.net/specs/openid-igov-openid-connect-1_0.html",
            publisher: "OpenID foundation",
            title: "International Government Assurance Profile (iGov) for OpenID Connect 1.0 - draft 3"
        },
        "Introspection": {
            authors: ["J. Richer"],
            date: "October 2015",
            href: "https://tools.ietf.org/html/rfc7662",
            publisher: "IETF",
            title: "OAuth 2.0 Token Introspection"
        },
        "JWA": {
            authors: ["M. Jones"],
            date: "may 2015",
            href: "https://tools.ietf.org/html/rfc7518",
            publisher: "IETF",
            title: "JSON Web Algorithms (JWA)"
        },
        "JWE": {
            authors: ["M. Jones, J. Hildebrand"],
            date: "may 2015",
            href: "https://tools.ietf.org/html/rfc7516",
            publisher: "IETF",
            title: "JSON Web Encryption (JWE)"
        },
        "JWK": {
            authors: ["M. Jones"],
            date: "may 2015",
            href: "https://tools.ietf.org/html/rfc7517",
            publisher: "IETF",
            title: "JSON Web Key (JWK))"
        },
        "JWS": {
            authors: ["M. Jones, J. Bradley, N. Sakimura"],
            date: "may 2015",
            href: "https://tools.ietf.org/html/rfc7515",
            publisher: "IETF",
            title: "JSON Web Signature (JWS)"
        },
        "JWT": {
            authors: ["M. Jones, J. Bradley, N. Sakimura"],
            date: "may 2015",
            href: "https://tools.ietf.org/html/rfc7519",
            publisher: "IETF",
            title: "JSON Web Token (JWT)"
        },
        "NCSC 2019": {
            date: "April 2019",
            href: "https://www.ncsc.nl/documenten/publicaties/2019/mei/01/ict-beveiligingsrichtlijnen-voor-transport-layer-security-tls",
            publisher: "NCSC",
            title: "ICT-beveiligingsrichtlijnen voor Transport Layer Security (TLS) v2.0"
        },
        "NCSC 2021": {
            date: "Jan 2021",
            href: "https://www.ncsc.nl/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1",
            publisher: "NCSC",
            title: "ICT-beveiligingsrichtlijnen voor Transport Layer Security (TLS) v2.1"
        },
        "NEN3610": {
            authors: [""],
            date: "Maart 2011",
            href: "https://www.nen.nl/nen-3610-2011-a1-2016-nl-217738",
            publisher: "Nederlands Normalisatie-instituut",
            title: "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten"
        },
        "no-Reliable-messaging": {
            authors: ["Marc de Graauw"],
            date: "June 18, 2010",
            href: "https://www.infoq.com/articles/no-reliable-messaging/",
            publisher: "infoQ",
            title: "Nobody Needs Reliable Messaging"
        },
        "OAuth2": {
            authors: ["D. Hardt"],
            date: "October 2012",
            href: "https://tools.ietf.org/html/rfc6749",
            publisher: "The Internet Engineering Task Force",
            title: "The OAuth 2.0 Authorization Framework"
        },
        "OpenID.Core": {
            authors: ["N. Sakimura, J. Bradley, M. Jones, B. de Medeiros, C. Mortimore"],
            date: "November 8 2014",
            href: "https://openid.net/specs/openid-connect-core-1_0.html",
            publisher: "OpenID foundation",
            title: "OpenID Connect Core 1.0"
        },
        "OpenID.Discovery": {
            authors: ["N. Sakimura, J. Bradley, M. Jones, E. Jay"],
            date: "November 8 2014",
            href: "https://openid.net/specs/openid-connect-discovery-1_0.html",
            publisher: "OpenID foundation",
            title: "OpenID Connect Discovery 1.0"
        },
        "Pas-toe-of-leg-uit": {
            href: "https://www.forumstandaardisatie.nl/open-standaarden/verplicht",
            publisher: "Forum Standaardisatie",
            title: "Lijst Verplichte standaarden"
        },
        "PKIO-PvE": {
            href: "https://www.logius.nl/domeinen/toegang/pkioverheid/aansluiten-als-tsp/programma-van-eisen",
            publisher: "Logius",
            title: "Programma van Eisen (PKIoverheid)"
        },
        "PKI-CA": {
            href: "https://www.logius.nl/domeinen/toegang/pkioverheid/aansluiten-als-tsp/toegetreden-vertrouwensdienstverleners",
            publisher: "Logius",
            title: "Toegetreden vertrouwensdienstverleners"
        },
        "PKIoverheid": {
            href: "https://www.logius.nl/domeinen/toegang/pkioverheid",
            publisher: "Logius",
            title: "PKIoverheid"
        },
        "PKIO-Cert": {
            href: "https://cert.pkioverheid.nl/",
            publisher: "Logius",
            title: "Overzicht PKIoverheid certificaten"
        },
        "SemVer": {
            authors: ["T. Preston-Werner"],
            date: "June 2013",
            href: "https://semver.org",
            title: "Semantic Versioning 2.0.0"
        },
        "Transport Security Module": {
            authors: [""],
            date: "27 september 2023",
            href: "https://geonovum.github.io/KP-APIs/API-strategie-modules/transport-security/",
            publisher: "Kennisplatform API's",
            title: "Transport Security Module"
        },
        "UMMR10": {
            authors: [""],
            date: "2001",
            href: "https://unece.org/DAM/cefact/umm/UMM_Revision_10_2001.zip",
            publisher: "UN/CEFACT",
            title: "UMM Revision 10"
        },
        "UMMUG": {
            authors: [""],
            date: "2003",
            href: "https://www.unece.org/fileadmin/DAM/cefact/umm/UMM_userguide_220606.pdf",
            publisher: "UN/CEFACT",
            title: "UN/CEFACT Modeling Methodology (UMM) User Guide"
        },
        "UUID": {
            authors: ["P. Leach", "M. Mealling", "R. Salz"],
            date: "July 2005",
            href: "https://tools.ietf.org/html/rfc4122",
            publisher: "The Internet Engineering Task Force",
            title: "A Universally Unique IDentifier (UUID) URN Namespace"
        },
        "DK-Voorwaarden": {
            date: "1 januari 2021",
            href: "https://www.logius.nl/domeinen/gegevensuitwisseling/digikoppeling/documentatie/voorwaarden-digikoppeling",
            publisher: "Logius",
            title: "Voorwaarden Digikoppeling"
        },
        "X520": {
            href: "https://www.iso.org/standard/43796.html",
            publisher: "ISO",
            title: "ITU-T Recommendation X.520 (2001) ISO/IEC 9594-6"
        },
        "ADR-Validator": {
            href: "https://gitlab.com/commonground/don/adr-validator/-/tree/v0.5.0/pkg/rulesets",
            title: "Technical ADR Validation rule testset 0.5.0",
            authors: ["H. Stijns"],
            publisher: "Geonovum",
            date: "November 2023"
        },
        "JRC117836": {
            href: "https://op.europa.eu/en/publication-detail/-/publication/6521f427-01df-11ea-8c1f-01aa75ed71a1",
            title: "The Relationship Between Open Source Software and Standard Setting",
            authors: ["Knut Blind", "Mirko Böhm"],
            editors: ["Nikolaus Thumm"],
            publisher: "Joint Research Center",
            id: "JRC117836",
            date: "2019"
        },
        "Krechmer2002": {
            href: "https://www.isology.com/pdf/cathedrals.pdf",
            title: "Cathedrals, Libraries and Bazaars",
            authors: ["Ken Krechmer"],
            publisher: "Association of Computing Machinery (ACM)",
            date: "March 2002"
        },
    }
}
