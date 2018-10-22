#### **Examples** ####

Model body to post
```json
{
    "name": "Customer Name LTDA",
    "email": "customer-email-model@blackatom.com",
    "type": "Física",
    "active": true,
    "customer_pf": {
      "name": "Customer Name",
      "rg": "98765432101",
      "cpf": "11122233344",
      "birthday": "1994-05-25"
    },
    "contacts": [{
      "name": "Obi Wan Kenoby",
      "phone": "+55 11 982269470",
      "email": "customer-email-model@blackatom.com"
    }],
    "addresses": [{
      "street": "Rua Zero Model",
      "streetNumber": "666",
      "neighborhood": "Vila Grande",
      "complement": "Casa",
      "city": "São Paulo",
      "state": "SP",
      "zipcode": "987654321",
      "country": "BR"
    }],
  }
```