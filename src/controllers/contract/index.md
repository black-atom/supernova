#### **Examples** ####

Model body to post
```json
{
  "active": true,
  "amount": 12000,
  "address": {
    "street": "Rua dos Bobos",
    "complementary": null,
    "street_number": "10",
    "neighborhood": "Santa rita",
    "city": "santo amaral",
    "state": "sp",
    "zipcode": "12345678"
  },
  "contract_code": "#123465",
  "company_id": "c2819f30-a223-11e8-8687-3bfc1df39ce7",
  "customer_id": "c87cfe70-a223-11e8-8687-3bfc1df39ce7",
  "created_date":"1994-05-25",
  "description":"manutenção relogio e modulo 50% desconto na peça",
	"document_type": "cnpj",
	"document_id": "429003210000142",
  "expiration_date": 15,
  "contact": {
  	"email": "obi_wan@kenobi.com",
    "name": "obi wan kenobi",
  	"phone": "+5511987654321"
  },
    "contract_products": [
      {
        "product_id": "ceef1450-a223-11e8-8687-3bfc1df39ce7",
        "name": "Product test Name",
        "sku": "1234",
        "serial_number": "040$yt04304g1g1as24as5",
        "category": "equipamento",
        "unit_price": 3000,
        "tangible": true,
        "active": true,
        "warranty_day": 365,
        "address": {
          "street": "Rua dos Bobos",
          "complementary": null,
          "street_number": "10",
          "neighborhood": "Santa rita",
          "city": "santo amaral",
          "state": "sp",
          "zipcode": "12345678"
        }
      }
    ],
	"name": "I'm a new customer",
  "subsequent_month": true,
	"social_name": "I'm a new social name",
  "status": "pago",
  "type": "mensal"
}
```