import { IShoppingSale } from "../structures/shoppings/sales/IShoppingSale";

export const MACBOOK_2020_PRO_13: IShoppingSale = {
    "id": "e03c604d-0bfb-4eaa-9c1c-967cf5c2daeb",
    "category": {
        "id": "bb419adb-5b33-4efe-ba11-1a3f583e13f5",
        "parent": {
            "id": "0b83cef8-6343-4af3-9b95-65829872b670",
            "parent": {
                "id": "4ac9ff2b-b2a0-4108-9122-b846bf001adc",
                "parent": null,
                "code": "digital_home_appliances",
                "name": "디지털/가전",
                "created_at": "Thu Dec 16 2021 12:39:54 GMT+0900 (Korean Standard Time)"
            },
            "code": "pc_game_sw",
            "name": "PC/게임/SW",
            "created_at": "Thu Dec 16 2021 12:39:54 GMT+0900 (Korean Standard Time)"
        },
        "code": "laptop",
        "name": "노트북",
        "created_at": "Thu Dec 16 2021 12:39:54 GMT+0900 (Korean Standard Time)"
    },
    "channels": [
        {
            "id": "f7b3ce76-23d3-489b-a54e-c7609abe6a46",
            "code": "seesoop",
            "name": "시숲",
            "exclusive": true
        }
    ],
    "units": [
        {
            "id": "5542764c-91d7-4af7-8b9e-8dfe3875985e",
            "product": {
                "id": "cc4c0ba3-5318-4080-a8f1-05b7c067d99b",
                "manufacturer": {
                    "id": "dfd59c71-64f8-4b8b-b25c-410ff8bf20a7",
                    "name": "apple"
                },
                "name": "맥북 2020 년형",
                "tangible": true
            },
            "brand": {
                "id": "d4f5f973-54a6-435f-9f3a-4575dfde27b9",
                "name": "apple"
            },
            "name": "맥북 2020 년형",
            "state": "NEW",
            "primary": true,
            "required": true,
            "options": [
                {
                    "id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                    "name": "CPU",
                    "type": "select",
                    "candidates": [
                        {
                            "id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae",
                            "name": "i3",
                            "images": []
                        },
                        {
                            "id": "343e1ae5-233a-403c-8435-a04be845cdec",
                            "name": "i5",
                            "images": []
                        },
                        {
                            "id": "ccaf3987-de89-4861-bfbe-33da8931aace",
                            "name": "i7",
                            "images": []
                        }
                    ]
                },
                {
                    "id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                    "name": "RAM",
                    "type": "select",
                    "candidates": [
                        {
                            "id": "5f391e41-1f83-4472-ad69-ad8d830443eb",
                            "name": "8GB",
                            "images": []
                        },
                        {
                            "id": "829636b5-8649-44ce-9b30-b4fa281bc589",
                            "name": "16GB",
                            "images": []
                        },
                        {
                            "id": "bd4723d2-9fa8-4a1c-a800-ee306137989b",
                            "name": "32GB",
                            "images": []
                        },
                        {
                            "id": "b253aa3f-caae-4a52-8a7c-f78ac5d16c58",
                            "name": "64GB",
                            "images": []
                        }
                    ]
                },
                {
                    "id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                    "name": "SSD",
                    "type": "select",
                    "candidates": [
                        {
                            "id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c",
                            "name": "256GB",
                            "images": []
                        },
                        {
                            "id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff",
                            "name": "512GB",
                            "images": []
                        },
                        {
                            "id": "740b53fb-50c0-4331-9ec6-f682e74e0046",
                            "name": "1TB",
                            "images": []
                        }
                    ]
                }
            ],
            "stocks": [
                {
                    "id": "94f1a45d-3c93-43a7-9650-63ac606f5808",
                    "name": "i3, 8GB, 256GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1010000,
                        "real": 1010000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "5f391e41-1f83-4472-ad69-ad8d830443eb"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "d3d48e8f-42bb-4887-80d6-9f9a8184bf5e",
                    "name": "i3, 8GB, 512GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1020000,
                        "real": 1020000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "5f391e41-1f83-4472-ad69-ad8d830443eb"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "14577963-ee99-4d02-a2c8-e0719b645b2b",
                    "name": "i3, 8GB, 1TB",
                    "disabled": false,
                    "price": {
                        "nominal": 1030000,
                        "real": 1030000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "5f391e41-1f83-4472-ad69-ad8d830443eb"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "740b53fb-50c0-4331-9ec6-f682e74e0046"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "eeac63d5-1b5f-4d8e-bd69-9ec90551cd8b",
                    "name": "i3, 16GB, 256GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1040000,
                        "real": 1040000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "829636b5-8649-44ce-9b30-b4fa281bc589"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "17609c48-2a67-4f4c-af38-562e5d0a4f09",
                    "name": "i3, 16GB, 512GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1050000,
                        "real": 1050000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "829636b5-8649-44ce-9b30-b4fa281bc589"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "d8b1bc55-0f1f-441e-93b8-e882118ac4d7",
                    "name": "i3, 16GB, 1TB",
                    "disabled": false,
                    "price": {
                        "nominal": 1060000,
                        "real": 1060000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "829636b5-8649-44ce-9b30-b4fa281bc589"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "740b53fb-50c0-4331-9ec6-f682e74e0046"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "488f714e-77e0-489d-ab05-8876b8d12ad8",
                    "name": "i3, 32GB, 256GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1070000,
                        "real": 1070000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "bd4723d2-9fa8-4a1c-a800-ee306137989b"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "04b2e306-d89b-485e-b8a5-57a26553db00",
                    "name": "i3, 32GB, 512GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1080000,
                        "real": 1080000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "bd4723d2-9fa8-4a1c-a800-ee306137989b"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "7ae771d8-a39f-4a3c-af5b-077a508a4939",
                    "name": "i3, 32GB, 1TB",
                    "disabled": false,
                    "price": {
                        "nominal": 1090000,
                        "real": 1090000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "bd4723d2-9fa8-4a1c-a800-ee306137989b"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "740b53fb-50c0-4331-9ec6-f682e74e0046"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "c07a5523-a713-4958-b862-68fb43791a0f",
                    "name": "i3, 64GB, 256GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1100000,
                        "real": 1100000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "b253aa3f-caae-4a52-8a7c-f78ac5d16c58"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "236ad1a9-a437-4854-8199-6f5783436b1a",
                    "name": "i3, 64GB, 512GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1110000,
                        "real": 1110000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "b253aa3f-caae-4a52-8a7c-f78ac5d16c58"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "76b2ff46-7c72-473e-aec6-9a656c5a3854",
                    "name": "i3, 64GB, 1TB",
                    "disabled": false,
                    "price": {
                        "nominal": 1120000,
                        "real": 1120000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "7cc3d6c4-d912-4922-b358-0f2b683a7aae"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "b253aa3f-caae-4a52-8a7c-f78ac5d16c58"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "740b53fb-50c0-4331-9ec6-f682e74e0046"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "8e8c1bc9-2be7-467e-90f6-74fe1cce6d10",
                    "name": "i5, 8GB, 256GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1130000,
                        "real": 1130000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "343e1ae5-233a-403c-8435-a04be845cdec"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "5f391e41-1f83-4472-ad69-ad8d830443eb"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "382ae5ba-d7fc-4c2c-83a3-b5594c9a08a9",
                    "name": "i5, 8GB, 512GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1140000,
                        "real": 1140000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "343e1ae5-233a-403c-8435-a04be845cdec"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "5f391e41-1f83-4472-ad69-ad8d830443eb"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "499b5125-5ea8-4e15-b67e-c4b6380eaaa2",
                    "name": "i5, 8GB, 1TB",
                    "disabled": false,
                    "price": {
                        "nominal": 1150000,
                        "real": 1150000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "343e1ae5-233a-403c-8435-a04be845cdec"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "5f391e41-1f83-4472-ad69-ad8d830443eb"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "740b53fb-50c0-4331-9ec6-f682e74e0046"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "171f0952-68a0-4d77-8e68-2fd686740ec2",
                    "name": "i5, 16GB, 256GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1160000,
                        "real": 1160000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "343e1ae5-233a-403c-8435-a04be845cdec"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "829636b5-8649-44ce-9b30-b4fa281bc589"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "0313c609-ec95-402e-925b-35d7d4395d96",
                    "name": "i5, 16GB, 512GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1170000,
                        "real": 1170000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "343e1ae5-233a-403c-8435-a04be845cdec"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "829636b5-8649-44ce-9b30-b4fa281bc589"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "1373711a-6323-47c4-920d-eec70cb6682d",
                    "name": "i5, 16GB, 1TB",
                    "disabled": false,
                    "price": {
                        "nominal": 1180000,
                        "real": 1180000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "343e1ae5-233a-403c-8435-a04be845cdec"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "829636b5-8649-44ce-9b30-b4fa281bc589"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "740b53fb-50c0-4331-9ec6-f682e74e0046"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "1186108f-6430-4a47-a8e4-b3da8c922158",
                    "name": "i5, 32GB, 256GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1190000,
                        "real": 1190000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "343e1ae5-233a-403c-8435-a04be845cdec"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "bd4723d2-9fa8-4a1c-a800-ee306137989b"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "c0ae4570-f6cb-4586-a910-c038e9e11350",
                    "name": "i5, 32GB, 512GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1200000,
                        "real": 1200000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "343e1ae5-233a-403c-8435-a04be845cdec"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "bd4723d2-9fa8-4a1c-a800-ee306137989b"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "cab37347-4314-4579-92b6-1be27870ee2f",
                    "name": "i5, 32GB, 1TB",
                    "disabled": false,
                    "price": {
                        "nominal": 1210000,
                        "real": 1210000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "343e1ae5-233a-403c-8435-a04be845cdec"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "bd4723d2-9fa8-4a1c-a800-ee306137989b"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "740b53fb-50c0-4331-9ec6-f682e74e0046"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "11fba46a-8573-4d02-9f6c-b72eea3bc0b8",
                    "name": "i5, 64GB, 256GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1220000,
                        "real": 1220000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "343e1ae5-233a-403c-8435-a04be845cdec"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "b253aa3f-caae-4a52-8a7c-f78ac5d16c58"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "a737665a-f8b3-4f95-8030-9236d765164f",
                    "name": "i5, 64GB, 512GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1230000,
                        "real": 1230000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "343e1ae5-233a-403c-8435-a04be845cdec"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "b253aa3f-caae-4a52-8a7c-f78ac5d16c58"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "8a15f1a9-f6ca-4cc1-9504-b9f80c4c7202",
                    "name": "i5, 64GB, 1TB",
                    "disabled": false,
                    "price": {
                        "nominal": 1240000,
                        "real": 1240000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "343e1ae5-233a-403c-8435-a04be845cdec"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "b253aa3f-caae-4a52-8a7c-f78ac5d16c58"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "740b53fb-50c0-4331-9ec6-f682e74e0046"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "6267c3c6-e393-4dcb-9f3f-4d33ae924d8d",
                    "name": "i7, 8GB, 256GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1250000,
                        "real": 1250000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "ccaf3987-de89-4861-bfbe-33da8931aace"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "5f391e41-1f83-4472-ad69-ad8d830443eb"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "10b902f4-afa4-4b6b-b763-8009ce598479",
                    "name": "i7, 8GB, 512GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1260000,
                        "real": 1260000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "ccaf3987-de89-4861-bfbe-33da8931aace"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "5f391e41-1f83-4472-ad69-ad8d830443eb"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "c5e537b7-94e3-496e-94cb-aacc3ca5ca28",
                    "name": "i7, 8GB, 1TB",
                    "disabled": false,
                    "price": {
                        "nominal": 1270000,
                        "real": 1270000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "ccaf3987-de89-4861-bfbe-33da8931aace"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "5f391e41-1f83-4472-ad69-ad8d830443eb"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "740b53fb-50c0-4331-9ec6-f682e74e0046"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "5ea846fa-06ac-400a-adfd-cc05d7694c24",
                    "name": "i7, 16GB, 256GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1280000,
                        "real": 1280000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "ccaf3987-de89-4861-bfbe-33da8931aace"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "829636b5-8649-44ce-9b30-b4fa281bc589"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "82a0eb57-7678-45e2-8d0c-1327994fd4fa",
                    "name": "i7, 16GB, 512GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1290000,
                        "real": 1290000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "ccaf3987-de89-4861-bfbe-33da8931aace"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "829636b5-8649-44ce-9b30-b4fa281bc589"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "e3918568-001f-443f-b7d4-ab86870ad452",
                    "name": "i7, 16GB, 1TB",
                    "disabled": false,
                    "price": {
                        "nominal": 1300000,
                        "real": 1300000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "ccaf3987-de89-4861-bfbe-33da8931aace"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "829636b5-8649-44ce-9b30-b4fa281bc589"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "740b53fb-50c0-4331-9ec6-f682e74e0046"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "7b5c985f-2c0f-401e-9e62-e0b97438efbb",
                    "name": "i7, 32GB, 256GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1310000,
                        "real": 1310000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "ccaf3987-de89-4861-bfbe-33da8931aace"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "bd4723d2-9fa8-4a1c-a800-ee306137989b"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "76c84191-d893-4e02-90c5-a8b235b7543f",
                    "name": "i7, 32GB, 512GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1320000,
                        "real": 1320000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "ccaf3987-de89-4861-bfbe-33da8931aace"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "bd4723d2-9fa8-4a1c-a800-ee306137989b"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "80612c4d-f551-4734-ba51-1508320df857",
                    "name": "i7, 32GB, 1TB",
                    "disabled": false,
                    "price": {
                        "nominal": 1330000,
                        "real": 1330000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "ccaf3987-de89-4861-bfbe-33da8931aace"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "bd4723d2-9fa8-4a1c-a800-ee306137989b"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "740b53fb-50c0-4331-9ec6-f682e74e0046"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "5139311c-6547-4d30-846d-b7c4db407467",
                    "name": "i7, 64GB, 256GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1340000,
                        "real": 1340000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "ccaf3987-de89-4861-bfbe-33da8931aace"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "b253aa3f-caae-4a52-8a7c-f78ac5d16c58"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "8f9bd69d-c9dd-4091-9a04-1da51261b49c"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "f417b367-d560-4122-861d-a988618bcf66",
                    "name": "i7, 64GB, 512GB",
                    "disabled": false,
                    "price": {
                        "nominal": 1350000,
                        "real": 1350000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "ccaf3987-de89-4861-bfbe-33da8931aace"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "b253aa3f-caae-4a52-8a7c-f78ac5d16c58"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "2050adec-1aa4-4ea6-9be9-028c7c1126ff"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "dbda504f-56a3-4f2e-b5ca-f1e23d1cade4",
                    "name": "i7, 64GB, 1TB",
                    "disabled": false,
                    "price": {
                        "nominal": 1360000,
                        "real": 1360000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "983e36d8-1388-4ace-9dea-4ee7a96ab26f",
                            "candidate_id": "ccaf3987-de89-4861-bfbe-33da8931aace"
                        },
                        {
                            "option_id": "4a704954-a96d-430f-b37f-7df41481cbfb",
                            "candidate_id": "b253aa3f-caae-4a52-8a7c-f78ac5d16c58"
                        },
                        {
                            "option_id": "d04d9d77-c146-4152-be58-eb8cea6bbf55",
                            "candidate_id": "740b53fb-50c0-4331-9ec6-f682e74e0046"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                }
            ]
        },
        {
            "id": "a43a8130-2a5e-40cf-8147-a5723ed82d9e",
            "product": {
                "id": "f986bb3f-04e6-4c76-96c5-fe7b0e8e737f",
                "manufacturer": {
                    "id": "dfd59c71-64f8-4b8b-b25c-410ff8bf20a7",
                    "name": "apple"
                },
                "name": "매직마우스",
                "tangible": true
            },
            "brand": {
                "id": "d4f5f973-54a6-435f-9f3a-4575dfde27b9",
                "name": "apple"
            },
            "name": "매직마우스",
            "state": "NEW",
            "primary": false,
            "required": false,
            "options": [
                {
                    "id": "c9e03b1d-9bdc-4f60-8910-ca6b621c1a97",
                    "name": "색상",
                    "type": "select",
                    "candidates": [
                        {
                            "id": "ab43a986-8717-4bf2-949b-2500880316a4",
                            "name": "화이트",
                            "images": []
                        },
                        {
                            "id": "65df4e47-68b5-4003-ad02-ffcdcd6ba5e1",
                            "name": "블랙",
                            "images": []
                        }
                    ]
                }
            ],
            "stocks": [
                {
                    "id": "8f4ce370-6ab9-4cb0-be92-b99563e3e8ad",
                    "name": "화이트",
                    "disabled": false,
                    "price": {
                        "nominal": 50000,
                        "real": 50000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "c9e03b1d-9bdc-4f60-8910-ca6b621c1a97",
                            "candidate_id": "ab43a986-8717-4bf2-949b-2500880316a4"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                },
                {
                    "id": "8ef3939a-b9e1-4bcb-aa61-bdc4f32a1013",
                    "name": "블랙",
                    "disabled": false,
                    "price": {
                        "nominal": 50000,
                        "real": 50000,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "c9e03b1d-9bdc-4f60-8910-ca6b621c1a97",
                            "candidate_id": "65df4e47-68b5-4003-ad02-ffcdcd6ba5e1"
                        }
                    ],
                    "images": [
                        {
                            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
                        }
                    ]
                }
            ]
        }
    ],
    "tags": [],
    "representative_images": [
        {
            "name": "fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg",
            "extension": "jpeg",
            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg"
        }
    ],
    "content": {
        "title": "맥북 2020 년형",
        "body": "<p></p>\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/ea11b0c6-4a81-473b-a201-28b3f2220e0c.jpeg\" alt=\"\" style=\"height: 100%;width: 100%\"/>\n<p></p>\n",
        "revert_policy": "\n<h4>교환 및 반품이 가능한 경우</h4>\n<ol>\n  <li>구매자 단순 변심은 상품 수령 후 7일 이내 (구매자 반품배송비 부담)</li>\n  <li>표시/광고와 상이, 상품하자의 경우 상품 수령 후 3개월 이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내 (판매자 반품배송비 부담)</li>\n  <ul>\n    <li>둘 중 하나 경과 시 반품/교환 불가</li>\n  </ul>\n</ol>\n\n<h4>교환 및 반품이 불가능한 경우</h4>\n<ul>\n  <li>반품요청기간이 지난 경우</li>\n  <li>구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우 (단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)</li>\n  <li>포장을 개봉하였으나 포장이 훼손되어 상품가치가 현저히 상실된 경우 (예: 식품, 화장품)</li>\n  <li>구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우 (라벨이 떨어진 의류 또는 태그가 떨어진 명품관 상품인 경우)</li>\n  <li>시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우 (예: 식품, 화장품)</li>\n  <li>고객주문 확인 후 상품제작에 들어가는 주문제작상품</li>\n  <li>복제가 가능한 상품 등의 포장을 훼손한 경우 (CD/DVD/GAME/도서의 경우 포장 개봉 시)</li>\n</ul>"
    },
    "created_at": "Wed May 04 2022 14:14:43 GMT+0900 (Korean Standard Time)",
    "updated_at": "Wed May 04 2022 14:28:21 GMT+0900 (Korean Standard Time)",
    "opened_at": "Wed May 04 2022 14:09:38 GMT+0900 (Korean Standard Time)",
    "closed_at": null,
    "paused_at": null,
    "suspended_at": null
};