#### **Examples** ####

Model body to post
```json
{
  "active": true,
  "amount": 12000,
  "address": {
    "street": "Rua dos Bobos",
    "complementary": null,
    "streetNumber": "10",
    "neighborhood": "Santa rita",
    "city": "santo amaral",
    "state": "sp",
    "zipcode": "12345678"
  },
  "contractNumber": "#123465",
  "companyId": "c2819f30-a223-11e8-8687-3bfc1df39ce7",
  "customerId": "c87cfe70-a223-11e8-8687-3bfc1df39ce7",
  "startDate":"1994-05-25",
  "description":"manutenção relogio e modulo 50% desconto na peça",
	"documentType": "cnpj",
	"documentId": "429003210000142",
  "expirationDate": 15,
  "contact": {
  	"email": "obi_wan@kenobi.com",
    "name": "obi wan kenobi",
  	"phone": "+5511987654321"
  },
  "contractProducts": [
    {
      "productId": "ceef1450-a223-11e8-8687-3bfc1df39ce7",
      "name": "Product test Name",
      "sku": "1234",
      "serialNumber": "040$yt04304g1g1as24as5",
      "category": "equipamento",
      "unitPrice": 3000,
      "tangible": true,
      "active": true,
      "warrantyDay": 365,
      "address": {
        "street": "Rua dos Bobos",
        "complementary": null,
        "streetNumber": "10",
        "neighborhood": "Santa rita",
        "city": "santo amaral",
        "state": "sp",
        "zipcode": "12345678"
      }
    }
  ],
	"name": "I'm a new customer",
  "subsequentMonth": true,
	"socialName": "I'm a new social name",
  "paymentStatus": "pago",
  "type": "mensal"
}
```