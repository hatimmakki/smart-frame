import axios from 'axios';

export var APIManager = {

    /**
     * This function returns a random number of artworks
     * @param {*} numberOfArtworks integer number of random artworks. default is 10
     * @param {*} onReturn a callback function that returns a list of artwork objects
     */
    getRandomArtworks: function (numberOfArtworks = 10, onReturn) {
        axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&medium=Paintings&departmentId=9&q=Painting`,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }
        ).then((response) => {
            let ids = response?.data?.objectIDs;
            // Shuffle array
            const shuffled = ids.sort(() => 0.5 - Math.random());

            // Get sub-array of first n elements after shuffled
            let ids2 = shuffled.slice(0, numberOfArtworks);

            // TODO: this is a bad practice and must change in future, if the API provided a way to fetch multiple objects with one call
            let list = [];
            ids2.forEach(id => {
                console.log(id)
                setTimeout(() => {
                    // make request every 100 ms to prevent to be banned from the API server
                    this.getArtwork(id, function (art) {
                        list.push(art);
                    })
                }, 500);
            });

            if (!!onReturn) onReturn(list)
        })
    },

    /**
     * Returns a single artwork object by id
     * @param {*} id The id of the artwork
     * @param {*} onReturn a callback function that returns an artwork object
     */
    getArtwork: function (id, onReturn) {
        axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }
        ).then((artwork) => {

            if (!!onReturn) onReturn(artwork)
        })
    },

    /**
     * Gets a dummy collection of artworks
     * @returns dummy collection of artworks
     */
    getDummyArtworks: function (onReturn) {
        onReturn([
            { "objectID": 65397, "isHighlight": true, "accessionNumber": "2003.222", "accessionYear": "2003", "isPublicDomain": true, "primaryImage": "https://images.metmuseum.org/CRDImages/as/original/DT11140.jpg", "primaryImageSmall": "https://images.metmuseum.org/CRDImages/as/web-large/DT11140.jpg", "additionalImages": ["https://images.metmuseum.org/CRDImages/as/original/DT5255.jpg"], "constituents": null, "department": "Asian Art", "objectName": "Figure", "title": "Pensive bodhisattva", "culture": "Korea", "period": "Three Kingdoms period (57 B.C.–A.D. 676)", "dynasty": "", "reign": "", "portfolio": "", "artistRole": "", "artistPrefix": "", "artistDisplayName": "", "artistDisplayBio": "", "artistSuffix": "", "artistAlphaSort": "", "artistNationality": "", "artistBeginDate": "", "artistEndDate": "", "artistGender": "", "artistWikidata_URL": "", "artistULAN_URL": "", "objectDate": "mid-7th century", "objectBeginDate": 636, "objectEndDate": 670, "medium": "Gilt bronze", "dimensions": "H. 8 7/8 in. (22.5 cm); W. 4 in. (10.2 cm); D. 4 1/4 in. (10.8 cm)", "measurements": [{ "elementName": "Image", "elementDescription": null, "elementMeasurements": { "Depth": 10.795, "Height": 22.5425, "Width": 10.16 } }], "creditLine": "Purchase, Walter and Leonore Annenberg and The Annenberg Foundation Gift, 2003", "geographyType": "", "city": "", "state": "", "county": "", "country": "", "region": "", "subregion": "", "locale": "", "locus": "", "excavation": "", "river": "", "classification": "Sculpture", "rightsAndReproduction": "", "linkResource": "", "metadataDate": "2021-08-26T04:39:36.823Z", "repository": "Metropolitan Museum of Art, New York, NY", "objectURL": "https://www.metmuseum.org/art/collection/search/65397", "tags": [{ "term": "Contemplation", "AAT_URL": "http://vocab.getty.edu/page/aat/300264547", "Wikidata_URL": "https://www.wikidata.org/wiki/Q1123855" }, { "term": "Buddhism", "AAT_URL": "http://vocab.getty.edu/page/aat/300073738", "Wikidata_URL": "https://www.wikidata.org/wiki/Q748" }, { "term": "Bodhisattvas", "AAT_URL": "http://vocab.getty.edu/page/aat/300264360", "Wikidata_URL": "https://www.wikidata.org/wiki/Q178149" }], "objectWikidata_URL": "https://www.wikidata.org/wiki/Q29383370", "isTimelineWork": true, "GalleryNumber": "233" },
            { "objectID": 65398, "isHighlight": false, "accessionNumber": "2003.589", "accessionYear": "2003", "isPublicDomain": true, "primaryImage": "https://images.metmuseum.org/CRDImages/as/original/2003_589_01_sf.jpg", "primaryImageSmall": "https://images.metmuseum.org/CRDImages/as/web-large/2003_589_01_sf.jpg", "additionalImages": ["https://images.metmuseum.org/CRDImages/as/original/2003_589_Strm1.JPG"], "constituents": null, "department": "Asian Art", "objectName": "Inrō", "title": "Case (Inrō) with Design of Landscape", "culture": "Japan", "period": "Edo period (1615–1868)", "dynasty": "", "reign": "", "portfolio": "", "artistRole": "", "artistPrefix": "", "artistDisplayName": "", "artistDisplayBio": "", "artistSuffix": "", "artistAlphaSort": "", "artistNationality": "", "artistBeginDate": "", "artistEndDate": "", "artistGender": "", "artistWikidata_URL": "", "artistULAN_URL": "", "objectDate": "18th century", "objectBeginDate": 1700, "objectEndDate": 1799, "medium": "Lacquer with sprinkled gold makie and cut gold foil", "dimensions": "W. 1 15/16 in. (5 cm); D. 7/8 in. (2.2. cm); L. 7 11/16 in. (19.6 cm)\r\nInro: L. 2 5/8 in. (6.7 cm)", "measurements": [{ "elementName": "Other", "elementDescription": "Inro", "elementMeasurements": { "Length": 6.7 } }, { "elementName": "Overall", "elementDescription": null, "elementMeasurements": { "Depth": 2.2, "Length": 19.6, "Width": 5 } }], "creditLine": "Gift of Beth Berne, 2003", "geographyType": "", "city": "", "state": "", "county": "", "country": "", "region": "", "subregion": "", "locale": "", "locus": "", "excavation": "", "river": "", "classification": "Inrō", "rightsAndReproduction": "", "linkResource": "", "metadataDate": "2020-04-02T14:22:10.83Z", "repository": "Metropolitan Museum of Art, New York, NY", "objectURL": "https://www.metmuseum.org/art/collection/search/65398", "tags": null, "objectWikidata_URL": "", "isTimelineWork": false, "GalleryNumber": "" },
            { "objectID": 65555, "isHighlight": false, "accessionNumber": "2003.394a–i", "accessionYear": "2003", "isPublicDomain": true, "primaryImage": "https://images.metmuseum.org/CRDImages/as/original/DP164311.jpg", "primaryImageSmall": "https://images.metmuseum.org/CRDImages/as/web-large/DP164311.jpg", "additionalImages": ["https://images.metmuseum.org/CRDImages/as/original/DP164312.jpg", "https://images.metmuseum.org/CRDImages/as/original/DP164313.jpg", "https://images.metmuseum.org/CRDImages/as/original/DP164314.jpg", "https://images.metmuseum.org/CRDImages/as/original/DP164315.jpg", "https://images.metmuseum.org/CRDImages/as/original/DP164316.jpg", "https://images.metmuseum.org/CRDImages/as/original/DP164317.jpg", "https://images.metmuseum.org/CRDImages/as/original/DP164318.jpg", "https://images.metmuseum.org/CRDImages/as/original/2003_394a-i_inscrip.JPG"], "constituents": [{ "constituentID": 14103, "role": "Artist", "name": "Xiao Yuncong", "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500328335", "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q3570964", "gender": "" }], "department": "Asian Art", "objectName": "Album", "title": "Landscapes", "culture": "China", "period": "Qing dynasty (1644–1911)", "dynasty": "", "reign": "", "portfolio": "", "artistRole": "Artist", "artistPrefix": "", "artistDisplayName": "Xiao Yuncong", "artistDisplayBio": "Chinese, 1596–1673", "artistSuffix": "", "artistAlphaSort": "Xiao Yuncong", "artistNationality": "Chinese", "artistBeginDate": "1596", "artistEndDate": "1673", "artistGender": "", "artistWikidata_URL": "https://www.wikidata.org/wiki/Q3570964", "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500328335", "objectDate": "dated 1668", "objectBeginDate": 1668, "objectEndDate": 1668, "medium": "Album of eight paintings; ink and color on paper", "dimensions": "Each leaf: 9 1/8 x 6 3/4 in. (23.2 x 17.1 cm)", "measurements": [{ "elementName": "Other", "elementDescription": null, "elementMeasurements": { "Height": 23.1775, "Width": 17.145 } }], "creditLine": "Gift of Florence and Herbert Irving Collection, in memory of Douglas Dillon, 2003", "geographyType": "", "city": "", "state": "", "county": "", "country": "", "region": "", "subregion": "", "locale": "", "locus": "", "excavation": "", "river": "", "classification": "Paintings", "rightsAndReproduction": "", "linkResource": "", "metadataDate": "2020-09-16T18:35:19.457Z", "repository": "Metropolitan Museum of Art, New York, NY", "objectURL": "https://www.metmuseum.org/art/collection/search/65555", "tags": [{ "term": "Rivers", "AAT_URL": "http://vocab.getty.edu/page/aat/300008707", "Wikidata_URL": "https://www.wikidata.org/wiki/Q4022" }, { "term": "Landscapes", "AAT_URL": "http://vocab.getty.edu/page/aat/300132294", "Wikidata_URL": "https://www.wikidata.org/wiki/Q191163" }], "objectWikidata_URL": "https://www.wikidata.org/wiki/Q78716328", "isTimelineWork": false, "GalleryNumber": "" }

        ])
    }

};


