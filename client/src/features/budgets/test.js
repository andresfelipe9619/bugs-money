const test = {
  "data": {
    "budget": {
      "id": "5852d2c4-bfc0-48f3-b202-ddd8ad3c1673",
      "name": "My Budget",
      "last_modified_on": "2018-10-27T02:07:02+00:00",
      "date_format": {
        "format": "MM/DD/YYYY"
      },
      "currency_format": {
        "iso_code": "USD",
        "example_format": "123,456.78",
        "decimal_digits": 2,
        "decimal_separator": ".",
        "symbol_first": true,
        "group_separator": ",",
        "currency_symbol": "$",
        "display_symbol": true
      },
      "first_month": "2018-10-01",
      "last_month": "2018-11-01",
      "accounts": [{
          "id": "d8efa26b-64ee-484d-9771-413262264f4b",
          "name": "Money",
          "type": "cash",
          "on_budget": true,
          "closed": false,
          "balance": 1200000000,
          "cleared_balance": 1200000000,
          "uncleared_balance": 0,
          "transfer_payee_id": "70f5d9b4-d307-4602-a164-5158b70ccd56",
          "deleted": false
        },
        {
          "id": "c96a627c-9a05-4ace-8f45-7d21c288dc8f",
          "name": "Bancolombia",
          "type": "creditCard",
          "on_budget": true,
          "closed": false,
          "balance": -3000000000,
          "cleared_balance": -3000000000,
          "uncleared_balance": 0,
          "transfer_payee_id": "44b30e09-9101-45c6-ba73-7cafd3147aef",
          "deleted": false
        }
      ],
      "payees": [{
          "id": "f469d222-cc72-4607-a54c-54d414177f29",
          "name": "Starting Balance",
          "transfer_account_id": null,
          "deleted": false
        },
        {
          "id": "2f6cbeab-e5ac-45ab-ab97-1333e8ee4da5",
          "name": "Manual Balance Adjustment",
          "transfer_account_id": null,
          "deleted": false
        },
        {
          "id": "e28a9a0f-21b0-468a-9c7c-4eb7b95673e0",
          "name": "Reconciliation Balance Adjustment",
          "transfer_account_id": null,
          "deleted": false
        },
        {
          "id": "70f5d9b4-d307-4602-a164-5158b70ccd56",
          "name": "Transfer : Money",
          "transfer_account_id": "d8efa26b-64ee-484d-9771-413262264f4b",
          "deleted": false
        },
        {
          "id": "44b30e09-9101-45c6-ba73-7cafd3147aef",
          "name": "Transfer : Bancolombia",
          "transfer_account_id": "c96a627c-9a05-4ace-8f45-7d21c288dc8f",
          "deleted": false
        },
        {
          "id": "b5b90cc5-7373-4ebe-ba2e-a7f37d85da6d",
          "name": "designer",
          "transfer_account_id": null,
          "deleted": false
        }
      ],
      "payee_locations": [],
      "category_groups": [{
          "id": "43916c35-09c4-42f0-851d-312f4b5190f0",
          "name": "Internal Master Category",
          "deleted": false
        },
        {
          "id": "6b53cc12-fe1e-43bb-867d-417a3da66d84",
          "name": "Credit Card Payments",
          "deleted": false
        },
        {
          "id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
          "name": "Immediate Obligations",
          "deleted": false
        },
        {
          "id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
          "name": "True Expenses",
          "deleted": false
        },
        {
          "id": "f95f1e3b-4d90-494b-afda-af3f6603d10c",
          "name": "Debt Payments",
          "deleted": false
        },
        {
          "id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
          "name": "Quality of Life Goals",
          "deleted": false
        },
        {
          "id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
          "name": "Just for Fun",
          "deleted": false
        },
        {
          "id": "85f0c9e8-ad78-46c9-855d-eb1841df9151",
          "name": "Hidden Categories",
          "deleted": false
        }
      ],
      "categories": [{
          "id": "0aac4f93-5445-4a40-a0dc-710389a1feae",
          "category_group_id": "43916c35-09c4-42f0-851d-312f4b5190f0",
          "name": "To be Budgeted",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": -1000000000,
          "balance": -1000000000,
          "deleted": false
        },
        {
          "id": "29c2572c-6fea-447f-b1cc-fa62793a137f",
          "category_group_id": "43916c35-09c4-42f0-851d-312f4b5190f0",
          "name": "Deferred Income SubCategory",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "8b39f955-4dd0-45d9-9bf9-0148e93d0c66",
          "category_group_id": "43916c35-09c4-42f0-851d-312f4b5190f0",
          "name": "Uncategorized",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "7fe7a132-cc90-40fd-abe8-0bf6b665b2e5",
          "category_group_id": "6b53cc12-fe1e-43bb-867d-417a3da66d84",
          "name": "Bancolombia",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "032a74bd-e24e-4898-9642-c29e1943ca8e",
          "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
          "name": "Rent/Mortgage",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "11376a8e-6fc0-4816-aad9-ced1252af3bd",
          "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
          "name": "Electric",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "cb74a6c0-b902-4cd9-9197-ce658a4694d3",
          "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
          "name": "Water",
          "original_category_group_id": null,
          "budgeted": 70000000,
          "activity": 0,
          "balance": 70000000,
          "deleted": false
        },
        {
          "id": "81155b4d-e8c1-4ef9-bc66-e279e392e75e",
          "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
          "name": "Internet",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "64909d69-4986-4109-a579-b5497af4a1ed",
          "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
          "name": "Groceries",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "71750532-9384-4eed-a2bb-3c21b3d73b99",
          "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
          "name": "Transportation",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "e07222f9-6234-46a0-a1ea-decd6404f87d",
          "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
          "name": "Interest & Fees",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "307f2c31-e86d-4589-aded-f7323dd11024",
          "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
          "name": "Auto Maintenance",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "e9b508ac-3a6b-458a-99a0-ccdec3c92cb4",
          "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
          "name": "Home Maintenance",
          "original_category_group_id": null,
          "budgeted": 90000000,
          "activity": 0,
          "balance": 90000000,
          "deleted": false
        },
        {
          "id": "b6da8296-bf79-4a4f-81b9-46450da399cb",
          "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
          "name": "Renter's/Home Insurance",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "49a23dbc-e1f4-411f-afc6-7d98286a47a2",
          "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
          "name": "Medical",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "b30673a2-943a-40d9-981b-9bd018622d6e",
          "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
          "name": "Clothing",
          "original_category_group_id": null,
          "budgeted": 190000000,
          "activity": 0,
          "balance": 190000000,
          "deleted": false
        },
        {
          "id": "a9b3650a-c023-49be-ac67-7f8c51ebef66",
          "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
          "name": "Gifts",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "b0a154c0-6053-402c-a525-1727d684e590",
          "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
          "name": "Giving",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "56f96c2a-a62c-4347-81c8-1b9bd5ad6ec8",
          "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
          "name": "Computer Replacement",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "c390d83b-449e-4768-8f95-516797501483",
          "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
          "name": "Software Subscriptions",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "goal_type": "TBD",
          "goal_creation_month": "2018-10-01",
          "goal_target": 83990,
          "goal_target_month": "2018-11-01",
          "goal_percentage_complete": 0,
          "deleted": false
        },
        {
          "id": "8d951b40-37cd-4bd6-9650-b0cd37d83499",
          "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
          "name": "Stuff I Forgot to Budget For",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": -800000000,
          "balance": -800000000,
          "deleted": false
        },
        {
          "id": "4d3320da-9653-4b5d-bbfd-347ddd92adb6",
          "category_group_id": "f95f1e3b-4d90-494b-afda-af3f6603d10c",
          "name": "Student Loan",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "98d0f38f-51b1-4f61-b5b3-1dd55af9a0e1",
          "category_group_id": "f95f1e3b-4d90-494b-afda-af3f6603d10c",
          "name": "Auto Loan",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "6bfa4529-0c53-4314-9bc4-3e33e436994a",
          "category_group_id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
          "name": "Vacation",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "915ed71a-7a9f-4333-a026-3feea87c7f62",
          "category_group_id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
          "name": "Fitness",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "386ae2f1-3e52-4ba1-be01-82c93a9dec63",
          "category_group_id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
          "name": "Education",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "e61c5e42-e3d0-4dc4-b9d7-cec944e273d4",
          "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
          "name": "Dining Out",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "a4e39a67-7067-4c47-9684-847fbf71f003",
          "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
          "name": "Gaming",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "78d27add-b563-4458-8c7b-b0bc785df805",
          "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
          "name": "Music",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        },
        {
          "id": "f9ba028f-5cb3-4588-be6e-62bb8e1bc7e5",
          "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
          "name": "Fun Money",
          "original_category_group_id": null,
          "budgeted": 0,
          "activity": 0,
          "balance": 0,
          "deleted": false
        }
      ],
      "months": [{
          "month": "2018-12-01",
          "income": 0,
          "budgeted": 0,
          "activity": 0,
          "to_be_budgeted": -800000000,
          "age_of_money": null,
          "categories": [{
              "id": "f9ba028f-5cb3-4588-be6e-62bb8e1bc7e5",
              "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
              "name": "Fun Money",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "e9b508ac-3a6b-458a-99a0-ccdec3c92cb4",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Home Maintenance",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 90000000,
              "deleted": false
            },
            {
              "id": "e61c5e42-e3d0-4dc4-b9d7-cec944e273d4",
              "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
              "name": "Dining Out",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "e07222f9-6234-46a0-a1ea-decd6404f87d",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Interest & Fees",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "cb74a6c0-b902-4cd9-9197-ce658a4694d3",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Water",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 70000000,
              "deleted": false
            },
            {
              "id": "b6da8296-bf79-4a4f-81b9-46450da399cb",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Renter's/Home Insurance",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "b30673a2-943a-40d9-981b-9bd018622d6e",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Clothing",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 190000000,
              "deleted": false
            },
            {
              "id": "b0a154c0-6053-402c-a525-1727d684e590",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Giving",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "a4e39a67-7067-4c47-9684-847fbf71f003",
              "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
              "name": "Gaming",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "98d0f38f-51b1-4f61-b5b3-1dd55af9a0e1",
              "category_group_id": "f95f1e3b-4d90-494b-afda-af3f6603d10c",
              "name": "Auto Loan",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "915ed71a-7a9f-4333-a026-3feea87c7f62",
              "category_group_id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
              "name": "Fitness",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "8b39f955-4dd0-45d9-9bf9-0148e93d0c66",
              "category_group_id": "43916c35-09c4-42f0-851d-312f4b5190f0",
              "name": "None",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "81155b4d-e8c1-4ef9-bc66-e279e392e75e",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Internet",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "7fe7a132-cc90-40fd-abe8-0bf6b665b2e5",
              "category_group_id": "6b53cc12-fe1e-43bb-867d-417a3da66d84",
              "name": "Bancolombia",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "78d27add-b563-4458-8c7b-b0bc785df805",
              "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
              "name": "Music",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "71750532-9384-4eed-a2bb-3c21b3d73b99",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Transportation",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "6bfa4529-0c53-4314-9bc4-3e33e436994a",
              "category_group_id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
              "name": "Vacation",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 1000000000,
              "deleted": false
            },
            {
              "id": "64909d69-4986-4109-a579-b5497af4a1ed",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Groceries",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "56f96c2a-a62c-4347-81c8-1b9bd5ad6ec8",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Computer Replacement",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "4d3320da-9653-4b5d-bbfd-347ddd92adb6",
              "category_group_id": "f95f1e3b-4d90-494b-afda-af3f6603d10c",
              "name": "Student Loan",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "307f2c31-e86d-4589-aded-f7323dd11024",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Auto Maintenance",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "29c2572c-6fea-447f-b1cc-fa62793a137f",
              "category_group_id": "43916c35-09c4-42f0-851d-312f4b5190f0",
              "name": "Deferred Income SubCategory",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "11376a8e-6fc0-4816-aad9-ced1252af3bd",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Electric",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "0aac4f93-5445-4a40-a0dc-710389a1feae",
              "category_group_id": "43916c35-09c4-42f0-851d-312f4b5190f0",
              "name": "Immediate Income SubCategory",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "032a74bd-e24e-4898-9642-c29e1943ca8e",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Rent/Mortgage",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "386ae2f1-3e52-4ba1-be01-82c93a9dec63",
              "category_group_id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
              "name": "Education",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 400000000,
              "deleted": false
            },
            {
              "id": "c390d83b-449e-4768-8f95-516797501483",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Software Subscriptions",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 90000000,
              "goal_type": "TBD",
              "goal_creation_month": "2018-10-01",
              "goal_target": 83990,
              "goal_target_month": "2018-11-01",
              "goal_percentage_complete": 107155,
              "deleted": false
            },
            {
              "id": "49a23dbc-e1f4-411f-afc6-7d98286a47a2",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Medical",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 160000000,
              "deleted": false
            },
            {
              "id": "a9b3650a-c023-49be-ac67-7f8c51ebef66",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Gifts",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "8d951b40-37cd-4bd6-9650-b0cd37d83499",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Stuff I Forgot to Budget For",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            }
          ]
        },
        {
          "month": "2018-11-01",
          "income": 0,
          "budgeted": 1650000000,
          "activity": 0,
          "to_be_budgeted": -800000000,
          "age_of_money": null,
          "categories": [{
              "id": "7fe7a132-cc90-40fd-abe8-0bf6b665b2e5",
              "category_group_id": "6b53cc12-fe1e-43bb-867d-417a3da66d84",
              "name": "Bancolombia",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "f9ba028f-5cb3-4588-be6e-62bb8e1bc7e5",
              "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
              "name": "Fun Money",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "e9b508ac-3a6b-458a-99a0-ccdec3c92cb4",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Home Maintenance",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 90000000,
              "deleted": false
            },
            {
              "id": "e61c5e42-e3d0-4dc4-b9d7-cec944e273d4",
              "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
              "name": "Dining Out",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "e07222f9-6234-46a0-a1ea-decd6404f87d",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Interest & Fees",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "cb74a6c0-b902-4cd9-9197-ce658a4694d3",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Water",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 70000000,
              "deleted": false
            },
            {
              "id": "b6da8296-bf79-4a4f-81b9-46450da399cb",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Renter's/Home Insurance",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "b30673a2-943a-40d9-981b-9bd018622d6e",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Clothing",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 190000000,
              "deleted": false
            },
            {
              "id": "b0a154c0-6053-402c-a525-1727d684e590",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Giving",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "a4e39a67-7067-4c47-9684-847fbf71f003",
              "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
              "name": "Gaming",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "98d0f38f-51b1-4f61-b5b3-1dd55af9a0e1",
              "category_group_id": "f95f1e3b-4d90-494b-afda-af3f6603d10c",
              "name": "Auto Loan",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "915ed71a-7a9f-4333-a026-3feea87c7f62",
              "category_group_id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
              "name": "Fitness",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "8b39f955-4dd0-45d9-9bf9-0148e93d0c66",
              "category_group_id": "43916c35-09c4-42f0-851d-312f4b5190f0",
              "name": "None",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "81155b4d-e8c1-4ef9-bc66-e279e392e75e",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Internet",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "78d27add-b563-4458-8c7b-b0bc785df805",
              "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
              "name": "Music",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "71750532-9384-4eed-a2bb-3c21b3d73b99",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Transportation",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "6bfa4529-0c53-4314-9bc4-3e33e436994a",
              "category_group_id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
              "name": "Vacation",
              "original_category_group_id": null,
              "budgeted": 1000000000,
              "activity": 0,
              "balance": 1000000000,
              "deleted": false
            },
            {
              "id": "64909d69-4986-4109-a579-b5497af4a1ed",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Groceries",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "56f96c2a-a62c-4347-81c8-1b9bd5ad6ec8",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Computer Replacement",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "4d3320da-9653-4b5d-bbfd-347ddd92adb6",
              "category_group_id": "f95f1e3b-4d90-494b-afda-af3f6603d10c",
              "name": "Student Loan",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "307f2c31-e86d-4589-aded-f7323dd11024",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Auto Maintenance",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "29c2572c-6fea-447f-b1cc-fa62793a137f",
              "category_group_id": "43916c35-09c4-42f0-851d-312f4b5190f0",
              "name": "Deferred Income SubCategory",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "11376a8e-6fc0-4816-aad9-ced1252af3bd",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Electric",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "0aac4f93-5445-4a40-a0dc-710389a1feae",
              "category_group_id": "43916c35-09c4-42f0-851d-312f4b5190f0",
              "name": "Immediate Income SubCategory",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "032a74bd-e24e-4898-9642-c29e1943ca8e",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Rent/Mortgage",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "386ae2f1-3e52-4ba1-be01-82c93a9dec63",
              "category_group_id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
              "name": "Education",
              "original_category_group_id": null,
              "budgeted": 400000000,
              "activity": 0,
              "balance": 400000000,
              "deleted": false
            },
            {
              "id": "c390d83b-449e-4768-8f95-516797501483",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Software Subscriptions",
              "original_category_group_id": null,
              "budgeted": 90000000,
              "activity": 0,
              "balance": 90000000,
              "goal_type": "TBD",
              "goal_creation_month": "2018-10-01",
              "goal_target": 83990,
              "goal_target_month": "2018-11-01",
              "goal_percentage_complete": 107155,
              "deleted": false
            },
            {
              "id": "49a23dbc-e1f4-411f-afc6-7d98286a47a2",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Medical",
              "original_category_group_id": null,
              "budgeted": 160000000,
              "activity": 0,
              "balance": 160000000,
              "deleted": false
            },
            {
              "id": "a9b3650a-c023-49be-ac67-7f8c51ebef66",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Gifts",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "8d951b40-37cd-4bd6-9650-b0cd37d83499",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Stuff I Forgot to Budget For",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            }
          ]
        },
        {
          "month": "2018-10-01",
          "income": 2000000000,
          "budgeted": 350000000,
          "activity": -800000000,
          "to_be_budgeted": 1650000000,
          "age_of_money": null,
          "categories": [{
              "id": "f9ba028f-5cb3-4588-be6e-62bb8e1bc7e5",
              "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
              "name": "Fun Money",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "e61c5e42-e3d0-4dc4-b9d7-cec944e273d4",
              "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
              "name": "Dining Out",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "e07222f9-6234-46a0-a1ea-decd6404f87d",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Interest & Fees",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "b6da8296-bf79-4a4f-81b9-46450da399cb",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Renter's/Home Insurance",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "b0a154c0-6053-402c-a525-1727d684e590",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Giving",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "a4e39a67-7067-4c47-9684-847fbf71f003",
              "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
              "name": "Gaming",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "98d0f38f-51b1-4f61-b5b3-1dd55af9a0e1",
              "category_group_id": "f95f1e3b-4d90-494b-afda-af3f6603d10c",
              "name": "Auto Loan",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "915ed71a-7a9f-4333-a026-3feea87c7f62",
              "category_group_id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
              "name": "Fitness",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "8b39f955-4dd0-45d9-9bf9-0148e93d0c66",
              "category_group_id": "43916c35-09c4-42f0-851d-312f4b5190f0",
              "name": "None",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "81155b4d-e8c1-4ef9-bc66-e279e392e75e",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Internet",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "78d27add-b563-4458-8c7b-b0bc785df805",
              "category_group_id": "afe25f6e-f3bf-48e9-a5a6-d6c9e9c78061",
              "name": "Music",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "71750532-9384-4eed-a2bb-3c21b3d73b99",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Transportation",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "6bfa4529-0c53-4314-9bc4-3e33e436994a",
              "category_group_id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
              "name": "Vacation",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "64909d69-4986-4109-a579-b5497af4a1ed",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Groceries",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "56f96c2a-a62c-4347-81c8-1b9bd5ad6ec8",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Computer Replacement",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "4d3320da-9653-4b5d-bbfd-347ddd92adb6",
              "category_group_id": "f95f1e3b-4d90-494b-afda-af3f6603d10c",
              "name": "Student Loan",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "49a23dbc-e1f4-411f-afc6-7d98286a47a2",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Medical",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "386ae2f1-3e52-4ba1-be01-82c93a9dec63",
              "category_group_id": "0876d45f-7c4a-4f4b-9518-3e11e5d9d5af",
              "name": "Education",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "307f2c31-e86d-4589-aded-f7323dd11024",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Auto Maintenance",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "29c2572c-6fea-447f-b1cc-fa62793a137f",
              "category_group_id": "43916c35-09c4-42f0-851d-312f4b5190f0",
              "name": "Deferred Income SubCategory",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "11376a8e-6fc0-4816-aad9-ced1252af3bd",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Electric",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "032a74bd-e24e-4898-9642-c29e1943ca8e",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Rent/Mortgage",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "c390d83b-449e-4768-8f95-516797501483",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Software Subscriptions",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "goal_type": "TBD",
              "goal_creation_month": "2018-10-01",
              "goal_target": 83990,
              "goal_target_month": "2018-11-01",
              "goal_percentage_complete": 0,
              "deleted": false
            },
            {
              "id": "7fe7a132-cc90-40fd-abe8-0bf6b665b2e5",
              "category_group_id": "6b53cc12-fe1e-43bb-867d-417a3da66d84",
              "name": "Bancolombia",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "0aac4f93-5445-4a40-a0dc-710389a1feae",
              "category_group_id": "43916c35-09c4-42f0-851d-312f4b5190f0",
              "name": "Immediate Income SubCategory",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": -1000000000,
              "balance": -1000000000,
              "deleted": false
            },
            {
              "id": "cb74a6c0-b902-4cd9-9197-ce658a4694d3",
              "category_group_id": "a3da1f32-507e-42da-bc89-6c8f724fae35",
              "name": "Water",
              "original_category_group_id": null,
              "budgeted": 70000000,
              "activity": 0,
              "balance": 70000000,
              "deleted": false
            },
            {
              "id": "b30673a2-943a-40d9-981b-9bd018622d6e",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Clothing",
              "original_category_group_id": null,
              "budgeted": 190000000,
              "activity": 0,
              "balance": 190000000,
              "deleted": false
            },
            {
              "id": "e9b508ac-3a6b-458a-99a0-ccdec3c92cb4",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Home Maintenance",
              "original_category_group_id": null,
              "budgeted": 90000000,
              "activity": 0,
              "balance": 90000000,
              "deleted": false
            },
            {
              "id": "a9b3650a-c023-49be-ac67-7f8c51ebef66",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Gifts",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": 0,
              "balance": 0,
              "deleted": false
            },
            {
              "id": "8d951b40-37cd-4bd6-9650-b0cd37d83499",
              "category_group_id": "e2fa5918-5cd8-491c-b596-b30fe984cfd8",
              "name": "Stuff I Forgot to Budget For",
              "original_category_group_id": null,
              "budgeted": 0,
              "activity": -800000000,
              "balance": -800000000,
              "deleted": false
            }
          ]
        }
      ],
      "transactions": [{
          "id": "307e30a7-e31f-4e52-8020-496c0bdf0b11",
          "date": "2018-10-26",
          "amount": -3000000000,
          "memo": null,
          "cleared": "cleared",
          "approved": true,
          "flag_color": null,
          "account_id": "c96a627c-9a05-4ace-8f45-7d21c288dc8f",
          "payee_id": "f469d222-cc72-4607-a54c-54d414177f29",
          "category_id": "0aac4f93-5445-4a40-a0dc-710389a1feae",
          "transfer_account_id": null,
          "transfer_transaction_id": null,
          "import_id": null,
          "deleted": false
        },
        {
          "id": "cd230afc-4e5d-4914-8459-dddfc298eac0",
          "date": "2018-10-26",
          "amount": -800000000,
          "memo": "",
          "cleared": "cleared",
          "approved": true,
          "flag_color": null,
          "account_id": "d8efa26b-64ee-484d-9771-413262264f4b",
          "payee_id": "b5b90cc5-7373-4ebe-ba2e-a7f37d85da6d",
          "category_id": "8d951b40-37cd-4bd6-9650-b0cd37d83499",
          "transfer_account_id": null,
          "transfer_transaction_id": null,
          "import_id": null,
          "deleted": false
        },
        {
          "id": "67542ac3-fe49-43db-84e6-7d981dc73c30",
          "date": "2018-10-26",
          "amount": 2000000000,
          "memo": null,
          "cleared": "cleared",
          "approved": true,
          "flag_color": null,
          "account_id": "d8efa26b-64ee-484d-9771-413262264f4b",
          "payee_id": "f469d222-cc72-4607-a54c-54d414177f29",
          "category_id": "0aac4f93-5445-4a40-a0dc-710389a1feae",
          "transfer_account_id": null,
          "transfer_transaction_id": null,
          "import_id": null,
          "deleted": false
        }
      ],
      "subtransactions": [],
      "scheduled_transactions": [],
      "scheduled_subtransactions": []
    },
    "server_knowledge": 72
  }
}


export default test; 