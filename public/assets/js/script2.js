let data =
    [
        {
            "id": 1,
            "email": "jasoncano0509@gmail.com",
            "phone": "1(555) 555-5555",
            "name": "Jason Cano",
            "hours": [0, 1, 1, 4, 10],
            "tutored": [
                { "date": "8/1/2023", "hours": 1, "notes": "" },
                { "date": "8/3/2023", "hours": 2, "notes": "" },
                { "date": "8/6/2023", "hours": 1, "notes": "" },
                { "date": "8/7/2023", "hours": 1, "notes": "" },
                { "date": "8/8/2023", "hours": 3, "notes": "" },
                { "date": "8/9/2023", "hours": 3, "notes": "" },
                { "date": "8/10/2023", "hours": 2, "notes": "" },
                { "date": "8/14/2023", "hours": 1, "notes": "" },
                { "date": "8/22/2023", "hours": 3, "notes": "" },
                { "date": "8/26/2023", "hours": 3, "notes": "" },
                { "date": "8/27/2023", "hours": 2, "notes": "" },
                { "date": "8/28/2023", "hours": 1, "notes": "" },
                { "date": "8/30/2023", "hours": 4, "notes": "" },
                { "date": "8/31/2023", "hours": 1, "notes": "" },
                { "date": "9/1/2023", "hours": 3, "notes": "" },
                { "date": "9/3/2023", "hours": 3, "notes": "" },
                { "date": "9/4/2023", "hours": 2, "notes": "" },
                { "date": "9/5/2023", "hours": 5, "notes": "" },
                { "date": "9/6/2023", "hours": 5, "notes": "" },
                { "date": "9/7/2023", "hours": 9.5, "notes": "" },
                { "date": "9/11/2023", "hours": 2, "notes": "" },
                { "date": "9/13/2023", "hours": 2, "notes": "" },
                { "date": "9/15/2023", "hours": 2, "notes": "" },
                { "date": "9/18/2023", "hours": 2, "notes": "" },
                { "date": "9/20/2023", "hours": 1, "notes": "" },
                { "date": "9/22/2023", "hours": 1.5, "notes": "" },
                { "date": "9/25/2023", "hours": 2, "notes": "" },
                { "date": "9/27/2023", "hours": 2, "notes": "" },
                { "date": "9/29/2023", "hours": 2, "notes": "" },
                { "date": "10/2/2023", "hours": 2, "notes": "" },
                { "date": "10/4/2023", "hours": 2, "notes": "" },
                { "date": "10/6/2023", "hours": 2, "notes": "" },
                { "date": "10/9/2023", "hours": 3, "notes": "" },
                { "date": "10/13/2023", "hours": 2, "notes": "" },
                { "date": "10/16/2023", "hours": 2, "notes": "" },
                { "date": "10/18/2023", "hours": 1, "notes": "" },
                { "date": "10/19/2023", "hours": 1, "notes": "" },
                { "date": "10/22/2023", "hours": 0.5, "notes": "" },
                { "date": "10/24/2023", "hours": 1, "notes": "" },
                { "date": "10/25/2023", "hours": 1, "notes": "" },
                { "date": "10/27/2023", "hours": 0.5, "notes": "" },
                { "date": "10/30/2023", "hours": 1.5, "notes": "" },
                { "date": "11/1/2023", "hours": 1, "notes": "" },
                { "date": "11/3/2023", "hours": 2, "notes": "" },
                { "date": "11/6/2023", "hours": 2.5, "notes": "" },
                { "date": "11/9/2023", "hours": 2, "notes": "" },
                { "date": "11/14/2023", "hours": 2, "notes": "" },
                { "date": "11/15/2023", "hours": 1, "notes": "" },
                { "date": "11/17/2023", "hours": 1.5, "notes": "" },
                { "date": "11/20/2023", "hours": 1, "notes": "" },
                { "date": "11/22/2023", "hours": 1.5, "notes": "" },
                { "date": "11/24/2023", "hours": 0.5, "notes": "" },
                { "date": "11/27/2023", "hours": 1.5, "notes": "" },
                { "date": "11/29/2023", "hours": 1, "notes": "" },
                { "date": "12/1/2023", "hours": 1, "notes": "" },
                { "date": "12/4/2023", "hours": 1, "notes": "" },
                { "date": "12/6/2023", "hours": 1, "notes": "" },
                { "date": "12/8/2023", "hours": 1, "notes": "" },
                { "date": "12/13/2023", "hours": 1.5, "notes": "" },
                { "date": "12/20/2023", "hours": 1, "notes": "" },
                { "date": "1/7/2024", "hours": 1, "notes": "" },
                { "date": "1/8/2024", "hours": 1, "notes": "" },
                { "date": "1/9/2024", "hours": 1, "notes": "" },
                { "date": "2/1/2024", "hours": 1, "notes": "" },
                { "date": "2/9/2024", "hours": 1, "notes": "" },
                { "date": "2/12/2024", "hours": 1, "notes": "" },
                { "date": "2/13/2024", "hours": 1, "notes": "" },
                { "date": "2/15/2024", "hours": 1, "notes": "" },
                { "date": "6/21/2024", "hours": 1, "notes": "" },
                { "date": "6/28/2024", "hours": 1, "notes": "" },
                { "date": "12/8/2024", "hours": 1, "notes": "" },
                { "date": "12/10/2024", "hours": 1, "notes": "" },
                { "date": "12/11/2024", "hours": 1, "notes": "" },
                { "date": "12/13/2024", "hours": 1, "notes": "" },
                { "date": "12/17/2024", "hours": 1, "notes": "" },
                { "date": "12/19/2024", "hours": 1, "notes": "" },
                { "date": "12/20/2024", "hours": 1, "notes": "" },
                { "date": "12/24/2024", "hours": 1, "notes": "" },
                { "date": "12/26/2024", "hours": 0.5, "notes": "" },
                { "date": "12/27/2024", "hours": 1, "notes": "" },
                { "date": "12/28/2024", "hours": 1, "notes": "" },
                { "date": "12/29/2024", "hours": 2, "notes": "" },
                { "date": "12/31/2024", "hours": 2, "notes": "" },
                { "date": "1/2/2025", "hours": 2, "notes": "" },
                { "date": "1/3/2025", "hours": 1, "notes": "" },
                { "date": "1/4/2025", "hours": 2, "notes": "" },
                { "date": "1/7/2025", "hours": 2, "notes": "" },
                { "date": "1/8/2025", "hours": 1, "notes": "" },
                { "date": "1/9/2025", "hours": 2, "notes": "" },
                { "date": "1/10/2025", "hours": 1, "notes": "" },
                { "date": "1/11/2025", "hours": 2, "notes": "" },
                { "date": "1/14/2025", "hours": 1, "notes": "" },
                { "date": "1/15/2025", "hours": 2, "notes": "" },
                { "date": "1/18/2025", "hours": 2, "notes": "" },
                { "date": "1/21/2025", "hours": 2, "notes": "" },
                { "date": "1/23/2025", "hours": 2, "notes": "" },
                { "date": "1/24/2025", "hours": 2, "notes": "" },
                { "date": "1/25/2025", "hours": 2, "notes": "" },
                { "date": "1/28/2025", "hours": 2, "notes": "" },
                { "date": "1/30/2025", "hours": 2, "notes": "" },
                { "date": "2/3/2025", "hours": 2, "notes": "" },
                { "date": "2/4/2025", "hours": 2, "notes": "" },
                { "date": "2/5/2025", "hours": 2, "notes": "" },
                { "date": "2/6/2025", "hours": 1, "notes": "" },
                { "date": "2/7/2025", "hours": 1, "notes": "" },
                { "date": "2/10/2025", "hours": 2, "notes": "" },
                { "date": "2/11/2025", "hours": 2, "notes": "" },
                { "date": "2/12/2025", "hours": 2, "notes": "" },
                { "date": "2/13/2025", "hours": 1, "notes": "" },
                { "date": "2/14/2025", "hours": 2, "notes": "" },
                { "date": "2/15/2025", "hours": 1, "notes": "" },
                { "date": "2/17/2025", "hours": 1, "notes": "" },
                { "date": "2/18/2025", "hours": 2, "notes": "" },
                { "date": "2/19/2025", "hours": 2, "notes": "" },
                { "date": "2/20/2025", "hours": 1, "notes": "" },
                { "date": "2/21/2025", "hours": 1, "notes": "" },
                { "date": "2/24/2025", "hours": 1, "notes": "" },
                { "date": "2/25/2025", "hours": 0.5, "notes": "" },
                { "date": "2/26/2025", "hours": 1, "notes": "" },
                { "date": "2/27/2025", "hours": 1, "notes": "" },
                { "date": "2/28/2025", "hours": 1, "notes": "" },
                { "date": "3/1/2025", "hours": 0.5, "notes": "" },
                { "date": "3/3/2025", "hours": 2, "notes": "" },
                { "date": "3/4/2025", "hours": 1, "notes": "" },
                { "date": "3/5/2025", "hours": 2, "notes": "" },
                { "date": "3/9/2025", "hours": 2, "notes": "" },
                { "date": "3/10/2025", "hours": 1, "notes": "" },
                { "date": "3/11/2025", "hours": 2, "notes": "" },
                { "date": "3/12/2025", "hours": 2, "notes": "" },
                { "date": "3/13/2025", "hours": 2, "notes": "" },
                { "date": "3/14/2025", "hours": 1, "notes": "" },
                { "date": "3/15/2025", "hours": 2, "notes": "" },
                { "date": "3/16/2025", "hours": 1, "notes": "" },
                { "date": "3/17/2025", "hours": 1, "notes": "" },
                { "date": "3/18/2025", "hours": 1, "notes": "" },
                { "date": "3/19/2025", "hours": 1, "notes": "" },
                { "date": "3/20/2025", "hours": 1, "notes": "" },
                { "date": "3/22/2025", "hours": 2, "notes": "" },
                { "date": "3/24/2025", "hours": 2, "notes": "" },
                { "date": "3/25/2025", "hours": 1, "notes": "" },
                { "date": "3/26/2025", "hours": 2, "notes": "" },
                { "date": "4/1/2025", "hours": 1, "notes": "" },
                { "date": "4/2/2025", "hours": 1, "notes": "" },
                { "date": "4/4/2025", "hours": 2, "notes": "" },
                { "date": "4/5/2025", "hours": 1, "notes": "" },
                { "date": "4/8/2025", "hours": 2, "notes": "" },
                { "date": "4/10/2025", "hours": 1, "notes": "" },
                { "date": "4/11/2025", "hours": 2, "notes": "" },
                { "date": "4/12/2025", "hours": 1, "notes": "" },
                { "date": "4/15/2025", "hours": 1, "notes": "" },
                { "date": "4/16/2025", "hours": 1, "notes": "" },
                { "date": "5/5/2025", "hours": 2, "notes": "" },
                { "date": "5/6/2025", "hours": 1, "notes": "" },
                { "date": "5/7/2025", "hours": 2, "notes": "" },
                { "date": "5/8/2025", "hours": 1, "notes": "" }
            ]
        },
        {
            "id": 2,
            "email": "jacob@goldenlightrealty.com",
            "phone": "(832) 605-0398",
            "name": "Yakup Altinisik",
            "hours": [0, 3, 0, 24, 0],
            "tutored": [
                { "date": "3/15/2024", "hours": 1, "notes": "" },
                { "date": "3/17/2024", "hours": 3, "notes": "" },
                { "date": "3/19/2024", "hours": 2, "notes": "" },
                { "date": "3/21/2024", "hours": 1, "notes": "" },
                { "date": "3/22/2024", "hours": 2, "notes": "" },
                { "date": "3/24/2024", "hours": 1.5, "notes": "" },
                { "date": "3/25/2024", "hours": 1, "notes": "" },
                { "date": "3/26/2024", "hours": 2, "notes": "" },
                { "date": "3/27/2024", "hours": 1, "notes": "" },
                { "date": "3/29/2024", "hours": 3.5, "notes": "" },
                { "date": "4/1/2024", "hours": 1, "notes": "" },
                { "date": "4/2/2024", "hours": 1, "notes": "" },
                { "date": "4/3/2024", "hours": 1, "notes": "" },
                { "date": "4/4/2024", "hours": 1, "notes": "" },
                { "date": "4/8/2024", "hours": 1, "notes": "" },
                { "date": "4/9/2024", "hours": 1, "notes": "" },
                { "date": "4/11/2024", "hours": 2, "notes": "" },
                { "date": "4/12/2024", "hours": 1, "notes": "" },
                { "date": "4/14/2024", "hours": 2, "notes": "" },
                { "date": "4/15/2024", "hours": 1, "notes": "" },
                { "date": "4/16/2024", "hours": 2, "notes": "" },
                { "date": "4/17/2024", "hours": 4, "notes": "" },
                { "date": "4/18/2024", "hours": 3, "notes": "" },
                { "date": "4/19/2024", "hours": 1, "notes": "" },
                { "date": "4/22/2024", "hours": 1, "notes": "" },
                { "date": "4/24/2024", "hours": 1, "notes": "" },
                { "date": "4/25/2024", "hours": 1, "notes": "" },
                { "date": "4/29/2024", "hours": 3, "notes": "" },
                { "date": "4/30/2024", "hours": 2, "notes": "" },
                { "date": "5/2/2024", "hours": 2, "notes": "" },
                { "date": "5/3/2024", "hours": 2.5, "notes": "" },
                { "date": "5/6/2024", "hours": 1, "notes": "" },
                { "date": "5/7/2024", "hours": 1, "notes": "" },
                { "date": "5/8/2024", "hours": 1, "notes": "" },
                { "date": "5/9/2024", "hours": 1, "notes": "" },
                { "date": "5/10/2024", "hours": 1, "notes": "" },
                { "date": "5/13/2024", "hours": 1, "notes": "" },
                { "date": "5/14/2024", "hours": 1, "notes": "" },
                { "date": "5/16/2024", "hours": 1.5, "notes": "" },
                { "date": "5/20/2024", "hours": 1, "notes": "" },
                { "date": "5/21/2024", "hours": 1, "notes": "" },
                { "date": "5/22/2024", "hours": 2, "notes": "" },
                { "date": "5/23/2024", "hours": 1, "notes": "" },
                { "date": "5/24/2024", "hours": 2.5, "notes": "" },
                { "date": "5/28/2024", "hours": 1, "notes": "" },
                { "date": "5/30/2024", "hours": 1, "notes": "" },
                { "date": "5/31/2024", "hours": 1.5, "notes": "" },
                { "date": "6/3/2024", "hours": 1, "notes": "" },
                { "date": "6/4/2024", "hours": 1, "notes": "" },
                { "date": "6/5/2024", "hours": 1, "notes": "" },
                { "date": "6/7/2024", "hours": 2.5, "notes": "" },
                { "date": "6/8/2024", "hours": 3.5, "notes": "" },
                { "date": "6/9/2024", "hours": 3.5, "notes": "" },
                { "date": "6/10/2024", "hours": 4, "notes": "" },
                { "date": "6/11/2024", "hours": 1, "notes": "" },
                { "date": "6/13/2024", "hours": 2, "notes": "" },
                { "date": "6/14/2024", "hours": 1, "notes": "" },
                { "date": "6/16/2024", "hours": 2, "notes": "" },
                { "date": "7/15/2024", "hours": 1, "notes": "" },
                { "date": "7/16/2024", "hours": 1, "notes": "" },
                { "date": "7/19/2024", "hours": 1, "notes": "" },
                { "date": "7/29/2024", "hours": 1, "notes": "" },
                { "date": "7/31/2024", "hours": 1, "notes": "" },
                { "date": "8/1/2024", "hours": 1, "notes": "" },
                { "date": "8/2/2024", "hours": 1, "notes": "" },
                { "date": "8/6/2024", "hours": 1, "notes": "" },
                { "date": "8/12/2024", "hours": 1, "notes": "" },
                { "date": "8/13/2024", "hours": 1, "notes": "" },
                { "date": "8/15/2024", "hours": 1.5, "notes": "" },
                { "date": "8/16/2024", "hours": 1, "notes": "" },
                { "date": "8/18/2024", "hours": 1, "notes": "" },
                { "date": "8/26/2024", "hours": 1, "notes": "" },
                { "date": "8/27/2024", "hours": 1, "notes": "" },
                { "date": "8/28/2024", "hours": 1.5, "notes": "" },
                { "date": "9/16/2024", "hours": 2, "notes": "" },
                { "date": "9/17/2024", "hours": 1, "notes": "" },
                { "date": "9/18/2024", "hours": 1.5, "notes": "" },
                { "date": "9/19/2024", "hours": 1, "notes": "" },
                { "date": "9/20/2024", "hours": 1, "notes": "" },
                { "date": "9/22/2024", "hours": 1.5, "notes": "" },
                { "date": "9/23/2024", "hours": 1, "notes": "" },
                { "date": "9/24/2024", "hours": 1, "notes": "" },
                { "date": "9/25/2024", "hours": 1, "notes": "" },
                { "date": "9/26/2024", "hours": 1.5, "notes": "" },
                { "date": "9/27/2024", "hours": 1.5, "notes": "" },
                { "date": "9/28/2024", "hours": 2, "notes": "" },
                { "date": "9/29/2024", "hours": 2, "notes": "" },
                { "date": "9/30/2024", "hours": 1.5, "notes": "" },
                { "date": "10/4/2024", "hours": 2, "notes": "" },
                { "date": "10/6/2024", "hours": 2, "notes": "" },
                { "date": "10/7/2024", "hours": 2, "notes": "" },
                { "date": "10/8/2024", "hours": 2, "notes": "" },
                { "date": "10/10/2024", "hours": 2, "notes": "" },
                { "date": "10/11/2024", "hours": 2, "notes": "" },
                { "date": "10/12/2024", "hours": 1, "notes": "" },
                { "date": "10/13/2024", "hours": 1, "notes": "" },
                { "date": "10/14/2024", "hours": 2, "notes": "" },
                { "date": "10/15/2024", "hours": 2, "notes": "" },
                { "date": "10/18/2024", "hours": 2, "notes": "" },
                { "date": "10/19/2024", "hours": 1, "notes": "" },
                { "date": "10/20/2024", "hours": 1, "notes": "" },
                { "date": "10/21/2024", "hours": 2, "notes": "" },
                { "date": "10/22/2024", "hours": 2, "notes": "" },
                { "date": "10/23/2024", "hours": 2, "notes": "" },
                { "date": "10/24/2024", "hours": 2, "notes": "" },
                { "date": "10/25/2024", "hours": 2, "notes": "" },
                { "date": "10/28/2024", "hours": 2, "notes": "" },
                { "date": "10/29/2024", "hours": 2, "notes": "" },
                { "date": "10/30/2024", "hours": 2, "notes": "" },
                { "date": "10/31/2024", "hours": 2, "notes": "" },
                { "date": "11/25/2024", "hours": 2, "notes": "" },
                { "date": "11/26/2024", "hours": 2, "notes": "" },
                { "date": "11/27/2024", "hours": 1, "notes": "" },
                { "date": "11/30/2024", "hours": 1, "notes": "" },
                { "date": "12/1/2024", "hours": 1, "notes": "" },
                { "date": "12/2/2024", "hours": 2, "notes": "" },
                { "date": "12/3/2024", "hours": 1, "notes": "" },
                { "date": "12/5/2024", "hours": 3, "notes": "" },
                { "date": "12/10/2024", "hours": 3, "notes": "" },
                { "date": "12/11/2024", "hours": 1, "notes": "" },
                { "date": "12/13/2024", "hours": 0.5, "notes": "" },
                { "date": "12/14/2024", "hours": 2, "notes": "" },
                { "date": "12/15/2024", "hours": 0.5, "notes": "" },
                { "date": "12/16/2024", "hours": 1, "notes": "" },
                { "date": "12/17/2024", "hours": 2, "notes": "" },
                { "date": "12/18/2024", "hours": 1, "notes": "" },
                { "date": "12/19/2024", "hours": 3, "notes": "" },
                { "date": "12/20/2024", "hours": 1, "notes": "" },
                { "date": "12/21/2024", "hours": 1, "notes": "" },
                { "date": "12/22/2024", "hours": 1, "notes": "" },
                { "date": "12/23/2024", "hours": 1, "notes": "" },
                { "date": "12/25/2024", "hours": 1, "notes": "" },
                { "date": "12/26/2024", "hours": 3, "notes": "" },
                { "date": "12/27/2024", "hours": 2.5, "notes": "" },
                { "date": "12/30/2024", "hours": 1, "notes": "" },
                { "date": "12/31/2024", "hours": 1, "notes": "" },
                { "date": "1/2/2025", "hours": 1, "notes": "" },
                { "date": "1/3/2025", "hours": 1, "notes": "" },
                { "date": "1/7/2025", "hours": 1, "notes": "" },
                { "date": "1/8/2025", "hours": 0.5, "notes": "" },
                { "date": "1/9/2025", "hours": 0.5, "notes": "" },
                { "date": "1/13/2025", "hours": 1, "notes": "" },
                { "date": "1/14/2025", "hours": 1, "notes": "" },
                { "date": "1/15/2025", "hours": 1, "notes": "" },
                { "date": "1/16/2025", "hours": 1, "notes": "" },
                { "date": "1/21/2025", "hours": 0.5, "notes": "" },
                { "date": "1/27/2025", "hours": 1, "notes": "" },
                { "date": "1/28/2025", "hours": 0.5, "notes": "" },
                { "date": "2/12/2025", "hours": 0.5, "notes": "" },
                { "date": "4/8/2025", "hours": 0.5, "notes": "" },
                { "date": "4/28/2025", "hours": 2, "notes": "" },
                { "date": "4/29/2025", "hours": 2, "notes": "" },
                { "date": "4/30/2025", "hours": 1, "notes": "" },
                { "date": "5/1/2025", "hours": 2, "notes": "" },
                { "date": "5/2/2025", "hours": 2, "notes": "" },
                { "date": "5/3/2025", "hours": 2, "notes": "" },
                { "date": "5/4/2025", "hours": 3, "notes": "" },
                { "date": "5/5/2025", "hours": 2, "notes": "" },
                { "date": "5/6/2025", "hours": 1, "notes": "" },
                { "date": "5/8/2025", "hours": 1.5, "notes": "" },
                { "date": "5/9/2025", "hours": 2, "notes": "" }
            ]
        },
        {
            "id": 3,
            "email": "michelleaminkowitz@gmail.com",
            "phone": "(718) 578-1904",
            "name": "Michelle Minkowitz",
            "hours": [0, 0, 3, 1, 3],
            "tutored": [
                { "date": "12/10/2023", "hours": 3, "notes": "" },
                { "date": "12/11/2023", "hours": 1, "notes": "" },
                { "date": "12/12/2023", "hours": 1, "notes": "" },
                { "date": "12/13/2023", "hours": 1, "notes": "" },
                { "date": "12/20/2023", "hours": 1.5, "notes": "" },
                { "date": "12/27/2023", "hours": 2, "notes": "" },
                { "date": "1/3/2024", "hours": 1, "notes": "" },
                { "date": "1/7/2024", "hours": 1.5, "notes": "" },
                { "date": "1/14/2024", "hours": 1.5, "notes": "" },
                { "date": "1/17/2024", "hours": 2, "notes": "" },
                { "date": "1/21/2024", "hours": 2, "notes": "" },
                { "date": "1/28/2024", "hours": 1, "notes": "" },
                { "date": "1/29/2024", "hours": 1, "notes": "" },
                { "date": "1/31/2024", "hours": 2, "notes": "" },
                { "date": "2/4/2024", "hours": 2, "notes": "" },
                { "date": "2/7/2024", "hours": 1, "notes": "" },
                { "date": "2/11/2024", "hours": 1, "notes": "" },
                { "date": "2/14/2024", "hours": 1, "notes": "" },
                { "date": "2/18/2024", "hours": 1, "notes": "" },
                { "date": "2/19/2024", "hours": 1, "notes": "" },
                { "date": "2/21/2024", "hours": 1, "notes": "" },
                { "date": "2/26/2024", "hours": 1, "notes": "" },
                { "date": "2/27/2024", "hours": 1, "notes": "" },
                { "date": "3/3/2024", "hours": 2, "notes": "" },
                { "date": "3/17/2024", "hours": 1, "notes": "" },
                { "date": "3/24/2024", "hours": 1, "notes": "" },
                { "date": "4/12/2024", "hours": 0.5, "notes": "" },
                { "date": "4/14/2024", "hours": 1, "notes": "" },
                { "date": "4/15/2024", "hours": 1.5, "notes": "" },
                { "date": "4/16/2024", "hours": 1, "notes": "" },
                { "date": "4/17/2024", "hours": 1, "notes": "" },
                { "date": "4/19/2024", "hours": 2, "notes": "" },
                { "date": "4/21/2024", "hours": 2, "notes": "" },
                { "date": "6/5/2024", "hours": 0.5, "notes": "" },
                { "date": "6/23/2024", "hours": 1.5, "notes": "" },
                { "date": "6/24/2024", "hours": 0.5, "notes": "" },
                { "date": "6/28/2024", "hours": 1, "notes": "" },
                { "date": "7/1/2024", "hours": 1, "notes": "" },
                { "date": "7/8/2024", "hours": 1, "notes": "" },
                { "date": "7/9/2024", "hours": 1, "notes": "" },
                { "date": "7/11/2024", "hours": 0.5, "notes": "" },
                { "date": "7/15/2024", "hours": 1.5, "notes": "" },
                { "date": "7/17/2024", "hours": 1, "notes": "" },
                { "date": "8/9/2024", "hours": 0.5, "notes": "" },
                { "date": "8/12/2024", "hours": 1, "notes": "" },
                { "date": "8/19/2024", "hours": 1, "notes": "" },
                { "date": "11/18/2024", "hours": 2, "notes": "" },
                { "date": "11/25/2024", "hours": 1, "notes": "" },
                { "date": "12/2/2024", "hours": 1.5, "notes": "" },
                { "date": "12/5/2024", "hours": 0.5, "notes": "" },
                { "date": "12/11/2024", "hours": 1, "notes": "" },
                { "date": "12/16/2024", "hours": 1, "notes": "" },
                { "date": "12/22/2024", "hours": 2, "notes": "" },
                { "date": "12/23/2024", "hours": 1, "notes": "" },
                { "date": "12/28/2024", "hours": 1, "notes": "" },
                { "date": "12/29/2024", "hours": 1, "notes": "" },
                { "date": "12/30/2024", "hours": 0.5, "notes": "" },
                { "date": "12/31/2024", "hours": 0.5, "notes": "" },
                { "date": "1/6/2025", "hours": 1, "notes": "" },
                { "date": "1/13/2025", "hours": 1, "notes": "" },
                { "date": "1/16/2025", "hours": 1, "notes": "" },
                { "date": "1/26/2025", "hours": 2, "notes": "" },
                { "date": "1/27/2025", "hours": 0.5, "notes": "" },
                { "date": "1/30/2025", "hours": 0.5, "notes": "" },
                { "date": "2/3/2025", "hours": 1.5, "notes": "" },
                { "date": "2/4/2025", "hours": 1, "notes": "" },
                { "date": "2/5/2025", "hours": 0.5, "notes": "" },
                { "date": "2/6/2025", "hours": 3, "notes": "" },
                { "date": "2/7/2025", "hours": 4, "notes": "" },
                { "date": "3/20/2025", "hours": 0.5, "notes": "" }
            ]
        },
        {
            "id": 4,
            "email": "ns.sanchez724@gmail.com",
            "phone": "(239) 560-3094",
            "name": "Noel Sanchez",
            "hours": [0, 1, 0, 0, 0],
            "tutored": [
                { "date": "1/10/2025", "hours": 1, "notes": "" }
            ]
        },
        {
            "id": 5,
            "email": "breemsbliss@gmail.com",
            "phone": "1(804)687-8383",
            "name": "Tommy Harding",
            "hours": [4, 15, 1, 0, 1],
            "tutored": [
                { "date": "8/26/2023", "hours": 1, "notes": "" },
                { "date": "8/28/2023", "hours": 1, "notes": "" },
                { "date": "11/24/2023", "hours": 1, "notes": "" },
                { "date": "12/2/2023", "hours": 1, "notes": "" },
                { "date": "12/19/2023", "hours": 1, "notes": "" },
                { "date": "12/26/2023", "hours": 0.5, "notes": "" },
                { "date": "12/27/2023", "hours": 0.5, "notes": "" },
                { "date": "12/31/2023", "hours": 2, "notes": "" },
                { "date": "1/1/2024", "hours": 3, "notes": "" },
                { "date": "1/19/2024", "hours": 4, "notes": "" },
                { "date": "6/6/2024", "hours": 5, "notes": "" },
                { "date": "6/12/2024", "hours": 5, "notes": "" },
                { "date": "7/3/2024", "hours": 5, "notes": "" },
                { "date": "7/12/2024", "hours": 5, "notes": "" },
                { "date": "7/20/2024", "hours": 3.5, "notes": "" },
                { "date": "7/21/2024", "hours": 3.5, "notes": "" }
            ]
        },
        {
            "id": 6,
            "email": "Domoboriowo14@Gmail.com",
            "phone": "(862)704-3809",
            "name": "Damilare Unique Omoboriowo",
            "hours": [2, 2, 4, 1, 0],
            "tutored": [
                { "date": "7/25/2024", "hours": 1, "notes": "" },
                { "date": "7/26/2024", "hours": 1, "notes": "" },
                { "date": "7/27/2024", "hours": 1.5, "notes": "" },
                { "date": "7/28/2024", "hours": 1.5, "notes": "" },
                { "date": "7/29/2024", "hours": 1, "notes": "" },
                { "date": "7/30/2024", "hours": 1.5, "notes": "" },
                { "date": "8/18/2024", "hours": 1.5, "notes": "" },
                { "date": "8/20/2024", "hours": 1, "notes": "" },
                { "date": "8/21/2024", "hours": 1, "notes": "" },
                { "date": "9/3/2024", "hours": 1, "notes": "" },
                { "date": "9/4/2024", "hours": 0.5, "notes": "" },
                { "date": "9/11/2024", "hours": 1, "notes": "" },
                { "date": "9/12/2024", "hours": 1, "notes": "" },
                { "date": "9/14/2024", "hours": 3, "notes": "" },
                { "date": "9/15/2024", "hours": 1, "notes": "" },
                { "date": "9/16/2024", "hours": 1, "notes": "" },
                { "date": "9/17/2024", "hours": 1, "notes": "" },
                { "date": "9/18/2024", "hours": 1.5, "notes": "" },
                { "date": "9/19/2024", "hours": 0.5, "notes": "" },
                { "date": "9/22/2024", "hours": 2, "notes": "" },
                { "date": "9/23/2024", "hours": 3, "notes": "" },
                { "date": "9/28/2024", "hours": 1, "notes": "" },
                { "date": "9/29/2024", "hours": 4, "notes": "" },
                { "date": "9/30/2024", "hours": 0.5, "notes": "" }
            ]
        },
        {
            "id": 7,
            "email": "caseyvmatthews@gmail.com",
            "phone": "(856) 745-2994",
            "name": "Catherine Matthews",
            "hours": [0, 2, 0, 0, 6],
            "tutored": [
                { "date": "5/16/2024", "hours": 2.5, "notes": "" },
                { "date": "5/17/2024", "hours": 2, "notes": "" },
                { "date": "5/19/2024", "hours": 2, "notes": "" },
                { "date": "5/20/2024", "hours": 1, "notes": "" },
                { "date": "5/22/2024", "hours": 2.5, "notes": "" },
                { "date": "5/23/2024", "hours": 1.5, "notes": "" },
                { "date": "5/24/2024", "hours": 3, "notes": "" },
                { "date": "5/28/2024", "hours": 1, "notes": "" },
                { "date": "5/29/2024", "hours": 2.5, "notes": "" },
                { "date": "5/30/2024", "hours": 2, "notes": "" },
                { "date": "5/31/2024", "hours": 1, "notes": "" },
                { "date": "6/2/2024", "hours": 3.5, "notes": "" },
                { "date": "6/3/2024", "hours": 1, "notes": "" },
                { "date": "6/4/2024", "hours": 1, "notes": "" },
                { "date": "6/5/2024", "hours": 1, "notes": "" },
                { "date": "6/6/2024", "hours": 1.5, "notes": "" },
                { "date": "6/7/2024", "hours": 1.5, "notes": "" },
                { "date": "6/10/2024", "hours": 1, "notes": "" },
                { "date": "6/11/2024", "hours": 0.5, "notes": "" },
                { "date": "6/12/2024", "hours": 1, "notes": "" },
                { "date": "6/13/2024", "hours": 2, "notes": "" },
                { "date": "6/14/2024", "hours": 1, "notes": "" },
                { "date": "6/16/2024", "hours": 1.5, "notes": "" },
                { "date": "6/17/2024", "hours": 2.5, "notes": "" },
                { "date": "6/19/2024", "hours": 1.5, "notes": "" },
                { "date": "6/20/2024", "hours": 2.5, "notes": "" },
                { "date": "6/24/2024", "hours": 1, "notes": "" },
                { "date": "6/25/2024", "hours": 1.5, "notes": "" },
                { "date": "6/26/2024", "hours": 3.5, "notes": "" },
                { "date": "6/27/2024", "hours": 1, "notes": "" },
                { "date": "6/28/2024", "hours": 1.5, "notes": "" },
                { "date": "7/1/2024", "hours": 1, "notes": "" },
                { "date": "7/2/2024", "hours": 1, "notes": "" },
                { "date": "7/3/2024", "hours": 1, "notes": "" },
                { "date": "7/4/2024", "hours": 1, "notes": "" },
                { "date": "7/7/2024", "hours": 1, "notes": "" },
                { "date": "7/8/2024", "hours": 1.5, "notes": "" },
                { "date": "7/9/2024", "hours": 1, "notes": "" },
                { "date": "7/10/2024", "hours": 1, "notes": "" },
                { "date": "7/11/2024", "hours": 1, "notes": "" },
                { "date": "7/15/2024", "hours": 1, "notes": "" },
                { "date": "7/16/2024", "hours": 1, "notes": "" },
                { "date": "7/17/2024", "hours": 1, "notes": "" },
                { "date": "7/18/2024", "hours": 1, "notes": "" },
                { "date": "7/22/2024", "hours": 0.5, "notes": "" },
                { "date": "7/24/2024", "hours": 1.5, "notes": "" },
                { "date": "7/25/2024", "hours": 1, "notes": "" },
                { "date": "7/27/2024", "hours": 0.5, "notes": "" },
                { "date": "7/28/2024", "hours": 1, "notes": "" },
                { "date": "7/29/2024", "hours": 1, "notes": "" },
                { "date": "7/30/2024", "hours": 1, "notes": "" },
                { "date": "7/31/2024", "hours": 3, "notes": "" },
                { "date": "8/1/2024", "hours": 2, "notes": "" },
                { "date": "8/2/2024", "hours": 2, "notes": "" },
                { "date": "8/5/2024", "hours": 1, "notes": "" },
                { "date": "8/6/2024", "hours": 1, "notes": "" },
                { "date": "8/10/2024", "hours": 1, "notes": "" },
                { "date": "8/12/2024", "hours": 1, "notes": "" },
                { "date": "8/13/2024", "hours": 1.5, "notes": "" },
                { "date": "8/14/2024", "hours": 2, "notes": "" },
                { "date": "8/15/2024", "hours": 1, "notes": "" },
                { "date": "8/19/2024", "hours": 1, "notes": "" },
                { "date": "8/20/2024", "hours": 1, "notes": "" },
                { "date": "8/21/2024", "hours": 1, "notes": "" },
                { "date": "8/23/2024", "hours": 1, "notes": "" },
                { "date": "8/26/2024", "hours": 2, "notes": "" },
                { "date": "8/27/2024", "hours": 1, "notes": "" },
                { "date": "8/28/2024", "hours": 1, "notes": "" },
                { "date": "8/29/2024", "hours": 1, "notes": "" },
                { "date": "8/30/2024", "hours": 2, "notes": "" },
                { "date": "9/1/2024", "hours": 2, "notes": "" },
                { "date": "9/3/2024", "hours": 1.5, "notes": "" },
                { "date": "9/6/2024", "hours": 1.5, "notes": "" },
                { "date": "9/9/2024", "hours": 2, "notes": "" },
                { "date": "9/10/2024", "hours": 2, "notes": "" },
                { "date": "9/11/2024", "hours": 1.5, "notes": "" },
                { "date": "9/12/2024", "hours": 1, "notes": "" },
                { "date": "9/13/2024", "hours": 1, "notes": "" },
                { "date": "9/14/2024", "hours": 2.5, "notes": "" },
                { "date": "9/15/2024", "hours": 1.5, "notes": "" },
                { "date": "9/16/2024", "hours": 1, "notes": "" },
                { "date": "9/17/2024", "hours": 1.5, "notes": "" },
                { "date": "9/18/2024", "hours": 1, "notes": "" },
                { "date": "9/19/2024", "hours": 1, "notes": "" },
                { "date": "9/20/2024", "hours": 1, "notes": "" },
                { "date": "9/22/2024", "hours": 1, "notes": "" },
                { "date": "9/24/2024", "hours": 1, "notes": "" },
                { "date": "9/25/2024", "hours": 1.5, "notes": "" },
                { "date": "9/27/2024", "hours": 1, "notes": "" },
                { "date": "9/30/2024", "hours": 1, "notes": "" }
            ]
        },
        {
            "id": 8,
            "email": "jennifer.v.harris@outlook.com",
            "phone": "(301) 957-1225",
            "name": "Jennifer Harris",
            "hours": [0, 1, 1, 6, 0],
            "tutored": [
                { "date": "7/15/2024", "hours": 1, "notes": "" },
                { "date": "7/16/2024", "hours": 2, "notes": "" },
                { "date": "7/18/2024", "hours": 1, "notes": "" },
                { "date": "7/19/2024", "hours": 2, "notes": "" },
                { "date": "7/22/2024", "hours": 1.5, "notes": "" },
                { "date": "7/23/2024", "hours": 2.5, "notes": "" },
                { "date": "7/25/2024", "hours": 2, "notes": "" },
                { "date": "7/26/2024", "hours": 1, "notes": "" },
                { "date": "7/29/2024", "hours": 2, "notes": "" },
                { "date": "7/30/2024", "hours": 2, "notes": "" },
                { "date": "8/2/2024", "hours": 3, "notes": "" },
                { "date": "8/3/2024", "hours": 3, "notes": "" },
                { "date": "8/4/2024", "hours": 2, "notes": "" },
                { "date": "8/5/2024", "hours": 3, "notes": "" },
                { "date": "8/6/2024", "hours": 1, "notes": "" },
                { "date": "8/8/2024", "hours": 3, "notes": "" },
                { "date": "8/9/2024", "hours": 2, "notes": "" },
                { "date": "8/11/2024", "hours": 2, "notes": "" },
                { "date": "8/13/2024", "hours": 2, "notes": "" },
                { "date": "8/14/2024", "hours": 1, "notes": "" },
                { "date": "8/15/2024", "hours": 2, "notes": "" },
                { "date": "8/16/2024", "hours": 1, "notes": "" },
                { "date": "8/18/2024", "hours": 2, "notes": "" },
                { "date": "8/19/2024", "hours": 2.5, "notes": "" },
                { "date": "8/20/2024", "hours": 1, "notes": "" },
                { "date": "8/21/2024", "hours": 2, "notes": "" },
                { "date": "8/22/2024", "hours": 1.5, "notes": "" },
                { "date": "8/23/2024", "hours": 1, "notes": "" },
                { "date": "8/25/2024", "hours": 2, "notes": "" },
                { "date": "8/27/2024", "hours": 1, "notes": "" },
                { "date": "8/29/2024", "hours": 1, "notes": "" },
                { "date": "8/30/2024", "hours": 2, "notes": "" },
                { "date": "9/2/2024", "hours": 2, "notes": "" },
                { "date": "9/4/2024", "hours": 1, "notes": "" },
                { "date": "9/5/2024", "hours": 1, "notes": "" },
                { "date": "9/6/2024", "hours": 2, "notes": "" },
                { "date": "9/8/2024", "hours": 2, "notes": "" }
            ]
        },
        {
            "id": 9,
            "email": "hasmigg23@gmail.com",
            "phone": "",
            "name": "Hasmig Gregorian",
            "hours": [0, 0, 0, 0, 3],
            "tutored": [
                { "date": "4/1/2024", "hours": 1, "notes": "" },
                { "date": "4/8/2024", "hours": 1, "notes": "" },
                { "date": "4/9/2024", "hours": 1, "notes": "" },
                { "date": "4/10/2024", "hours": 3, "notes": "" },
                { "date": "4/11/2024", "hours": 1, "notes": "" },
                { "date": "4/12/2024", "hours": 3, "notes": "" },
                { "date": "4/13/2024", "hours": 4, "notes": "" },
                { "date": "4/15/2024", "hours": 1, "notes": "" },
                { "date": "4/16/2024", "hours": 2, "notes": "" },
                { "date": "4/17/2024", "hours": 3, "notes": "" },
                { "date": "4/18/2024", "hours": 5, "notes": "" },
                { "date": "4/19/2024", "hours": 1, "notes": "" },
                { "date": "4/23/2024", "hours": 1, "notes": "" },
                { "date": "4/25/2024", "hours": 1, "notes": "" },
                { "date": "4/26/2024", "hours": 3, "notes": "" },
                { "date": "4/29/2024", "hours": 2, "notes": "" },
                { "date": "4/30/2024", "hours": 1, "notes": "" },
                { "date": "5/1/2024", "hours": 1, "notes": "" },
                { "date": "5/6/2024", "hours": 1, "notes": "" },
                { "date": "5/7/2024", "hours": 1, "notes": "" },
                { "date": "5/9/2024", "hours": 1, "notes": "" },
                { "date": "5/10/2024", "hours": 1, "notes": "" },
                { "date": "5/21/2024", "hours": 1, "notes": "" },
                { "date": "5/22/2024", "hours": 2, "notes": "" },
                { "date": "5/23/2024", "hours": 1, "notes": "" },
                { "date": "5/24/2024", "hours": 0.5, "notes": "" },
                { "date": "5/28/2024", "hours": 1, "notes": "" },
                { "date": "5/29/2024", "hours": 1, "notes": "" },
                { "date": "5/30/2024", "hours": 2, "notes": "" },
                { "date": "5/31/2024", "hours": 1, "notes": "" },
                { "date": "6/3/2024", "hours": 1, "notes": "" },
                { "date": "6/4/2024", "hours": 1, "notes": "" },
                { "date": "6/5/2024", "hours": 1, "notes": "" },
                { "date": "6/6/2024", "hours": 1, "notes": "" },
                { "date": "6/7/2024", "hours": 2, "notes": "" },
                { "date": "6/8/2024", "hours": 3, "notes": "" },
                { "date": "6/10/2024", "hours": 1, "notes": "" },
                { "date": "6/11/2024", "hours": 1, "notes": "" },
                { "date": "6/12/2024", "hours": 0.5, "notes": "" }
            ]
        },
        {
            "id": 10,
            "email": "",
            "phone": "",
            "name": "Debora Cano",
            "hours": [0, 2, 0, 0, 0],
            "tutored": [
                { "date": "11/9/2023", "hours": 1, "notes": "" },
                { "date": "3/20/2024", "hours": 1, "notes": "" }
            ]
        },
        {
            "id": 11,
            "email": "lexx.sunshineteam@gmail.com",
            "phone": "3524286931",
            "name": "Alexis Vasquez",
            "hours": [2, 0, 2, 0, 0],
            "tutored": [
                { "date": "5/9/2023", "hours": 1, "notes": "" },
                { "date": "5/16/2023", "hours": 1, "notes": "" },
                { "date": "5/23/2023", "hours": 1, "notes": "" },
                { "date": "6/19/2023", "hours": 1, "notes": "" },
                { "date": "6/23/2023", "hours": 1, "notes": "" },
                { "date": "7/12/2023", "hours": 1, "notes": "" },
                { "date": "7/18/2023", "hours": 1, "notes": "" },
                { "date": "7/25/2023", "hours": 1, "notes": "" },
                { "date": "7/29/2023", "hours": 1, "notes": "" },
                { "date": "8/25/2023", "hours": 2, "notes": "" }
            ]
        },
        {
            "id": 12,
            "email": "",
            "phone": "",
            "name": "Marc Rhymanun",
            "hours": [0, 2, 4, 0, 0],
            "tutored": [
                { "date": "7/28/2023", "hours": 2, "notes": "" },
                { "date": "7/30/2023", "hours": 2, "notes": "" },
                { "date": "8/2/2023", "hours": 1, "notes": "" },
                { "date": "8/3/2023", "hours": 0.5, "notes": "" },
                { "date": "8/4/2023", "hours": 1, "notes": "" },
                { "date": "8/5/2023", "hours": 1, "notes": "" },
                { "date": "8/6/2023", "hours": 1.5, "notes": "" },
                { "date": "8/11/2023", "hours": 1, "notes": "" },
                { "date": "8/12/2023", "hours": 2, "notes": "" },
                { "date": "8/13/2023", "hours": 2, "notes": "" },
                { "date": "8/14/2023", "hours": 1, "notes": "" },
                { "date": "9/26/2023", "hours": 1, "notes": "" },
                { "date": "9/29/2023", "hours": 1.5, "notes": "" },
                { "date": "9/30/2023", "hours": 2, "notes": "" },
                { "date": "10/1/2023", "hours": 2.5, "notes": "" }
            ]
        },
        {
            "id": 13,
            "email": "tayloraldridge3@gmail.com",
            "phone": "",
            "name": "Taylor Aldridge",
            "hours": [0, 2, 4, 1, 0],
            "tutored": [
                { "date": "4/19/2023", "hours": 1, "notes": "" },
                { "date": "4/26/2023", "hours": 1, "notes": "" },
                { "date": "5/3/2023", "hours": 1, "notes": "" },
                { "date": "5/10/2023", "hours": 1, "notes": "" },
                { "date": "5/17/2023", "hours": 1, "notes": "" },
                { "date": "8/2/2023", "hours": 1, "notes": "" },
                { "date": "8/8/2023", "hours": 1, "notes": "" },
                { "date": "8/10/2023", "hours": 1, "notes": "" },
                { "date": "8/31/2023", "hours": 0.5, "notes": "" },
                { "date": "9/7/2023", "hours": 1, "notes": "" },
                { "date": "9/11/2023", "hours": 1, "notes": "" },
                { "date": "9/13/2023", "hours": 1, "notes": "" },
                { "date": "9/18/2023", "hours": 0.5, "notes": "" },
                { "date": "9/20/2023", "hours": 1.5, "notes": "" },
                { "date": "9/22/2023", "hours": 0.5, "notes": "" },
                { "date": "9/26/2023", "hours": 1, "notes": "" },
                { "date": "9/27/2023", "hours": 1.5, "notes": "" },
                { "date": "9/28/2023", "hours": 1, "notes": "" },
                { "date": "9/29/2023", "hours": 1, "notes": "" },
                { "date": "10/2/2023", "hours": 1.5, "notes": "" },
                { "date": "10/3/2023", "hours": 1, "notes": "" },
                { "date": "10/9/2023", "hours": 1, "notes": "" },
                { "date": "10/16/2023", "hours": 1.5, "notes": "" },
                { "date": "10/18/2023", "hours": 2.5, "notes": "" },
                { "date": "10/23/2023", "hours": 0.5, "notes": "" },
                { "date": "10/24/2023", "hours": 1, "notes": "" },
                { "date": "10/25/2023", "hours": 1, "notes": "" },
                { "date": "10/30/2023", "hours": 0.5, "notes": "" },
                { "date": "10/31/2023", "hours": 1, "notes": "" },
                { "date": "11/1/2023", "hours": 1, "notes": "" },
                { "date": "11/16/2023", "hours": 1, "notes": "" }
            ]
        },
        {
            "id": 14,
            "email": "salceja@gmail.com",
            "phone": "",
            "name": "Salvador",
            "hours": [0, 2, 1, 0, 0],
            "tutored": [
                { "date": "12/10/2023", "hours": 2, "notes": "" },
                { "date": "12/11/2023", "hours": 1, "notes": "" },
                { "date": "12/12/2023", "hours": 2, "notes": "" },
                { "date": "12/13/2023", "hours": 1, "notes": "" }
            ]
        },
        {
            "id": 15,
            "email": "Romero.Hipolito@Gmail.com",
            "phone": "3478805004",
            "name": "Hipolito Romero",
            "hours": [0, 1, 2, 0, 0],
            "tutored": [
                { "date": "10/22/2023", "hours": 2.5, "notes": "" },
                { "date": "10/24/2023", "hours": 0.5, "notes": "" },
                { "date": "10/30/2023", "hours": 1, "notes": "" },
                { "date": "11/7/2023", "hours": 1, "notes": "" },
                { "date": "11/19/2023", "hours": 1, "notes": "" },
                { "date": "11/25/2023", "hours": 1, "notes": "" },
                { "date": "11/26/2023", "hours": 1, "notes": "" },
                { "date": "11/27/2023", "hours": 0.5, "notes": "" },
                { "date": "12/2/2023", "hours": 0.5, "notes": "" },
                { "date": "12/15/2023", "hours": 2, "notes": "" }
            ]
        }
    ];

const fx = i => {
    let dts = [];

    let output = `
        ,
        {
            "id" : "${data[i].id}",
            "email": "${data[i].email}",
            "phone": "${data[i].phone}",
            "name": "${data[i].name}", 
            "hours": [${data[i].hours}],
            "tutored": [
        `;

    data[i].dates.map(d => {
        let d2 = new Date(d).toLocaleDateString();

        Object.keys(dts).includes(`date_${d2}`)
            ? dts[`date_${d2}`].hours += 0.5
            : dts[`date_${d2}`] = { date: d2, hours: 0.5, notes: "" };
    });

    Object.values(dts).forEach(obj => {
        output += "\t\t\t{"
        Object.entries(obj).forEach(([k, v]) => {
            k == "hours" ? output += `"${k}": ${v}, ` :
                k == "notes" ? output += `"${k}": "${v}" ` : output += `"${k}": "${v}", `;
        });

        output += "},\n"
    });

    output += `\t\t]
\t}`

    console.log(output);
};

const ch_order = ({ id, value }) => {
    let el1 = data.find(obj => obj.id == id);
    let el2 = data.find(obj => obj.id == value);

    el2.id = parseInt(id);
    el1.id = parseInt(value);
    data = [el1, el2, ...data.filter(obj => ![el1, el2].includes(obj))];

    init(data);
};

const renderRows = d => {

    data = d.sort((a, b) => a.id - b.id);

    let i = 0;
    
    main.innerHTML = '';
    
    let rowInterval = setInterval(
        () => {

            let owed = (d[i].hours[0]*0.5+d[i].hours[1]+d[i].hours[2]*5+d[i].hours[3]*10+d[i].hours[4]*20) - (d[i].tutored.length ? d[i].tutored.map(t=>t.hours).reduce((a,b)=>a+b) : 0);
            
            main.innerHTML += `
            <table>
                <tr>
                    <td><input id="${d[i].id}" onchange="ch_order(this)" value="${d[i].id}"></td>
                    <td>${d[i].name}</td>
                    <td><button>Details</button></td>
                    <td>
                        <button>1/2</button>
                        <button>1</button>
                        <button>5</button>
                        <button>10</button>
                        <button>20</button>
                    </td>
                    <td>
                        <button>- 1/2 hour</button>
                    </td>
                    <td>${owed}</td>
                </tr>
            </table>`;
            i++;
            if (i == d.length) {
                clearInterval(rowInterval)
            }
        }, 50
    )
};

const init = d => {

    let purchased = data.map(obj => obj.hours[0]).reduce((a, b) => a + b) * .5 +
        data.map(obj => obj.hours[1]).reduce((a, b) => a + b) +
        data.map(obj => obj.hours[2]).reduce((a, b) => a + b) * 5 +
        data.map(obj => obj.hours[3]).reduce((a, b) => a + b) * 10 +
        data.map(obj => obj.hours[4]).reduce((a, b) => a + b) * 20;

    let tutored = data.length ? data.map(({ tutored }) => tutored.length ? tutored.map(({ hours }) => hours).reduce((a, b) => a + b) : 0).reduce((a, b) => a + b) : 0;

    let activeHeros = data.map(({ hours, tutored }) =>
        hours[0] * 0.5 + hours[1] + hours[2] * 5 + hours[3] * 10 + hours[4] * 20 - tutored.map(t => t.hours) ? tutored.map(t => t.hours).reduce((a, b) => a + b) > 0 : false
            ? 1
            : 0
    ).reduce((a, b) => a + b);

    container.innerHTML = `
    <div id="newClientDiv" class="row">
        <div id="summary">
            <label for="totalPurchased">Total Purchased</label>
            <span id="activeClients">${purchased}</span>
            <label for="totalTutored">Total Tutored</label>
            <span id="activeClients">${tutored}
            </span>
            <label for="totalOwed">Total Owed</label>
            <span id="activeClients">${purchased - tutored}
            </span>
            <label for="activeClients">Active Heroes</label>
            <span id="activeClients">${activeHeros}</span>
        </div>
        <div id="addHeroDiv">
            <input id="heroName" placeholder="Hero's Name">
            <input id="email" placeholder="super@heroes.com">
            <input id="number" placeholder="1 (123) 456-7890">
            <button id="addHero" >Add Hero</button>
        </div>
    </div>

    <table id="table">
        <thead>
            <th>order</th>
            <th>Name</th>
            <th>Details</th>
            <th>Hours Purchased</th>
            <th>Tutored Time</th>
            <th>Time Owed</th>
        </thead>
    </table>

    <main id="main"></main>`;

    document.getElementById('addHero').onclick = () => {
        if(heroName.value && email.value && number.value) {
            data = [{id:data.length+1, email: email.value, phone: number.value, name: heroName.value, hours: [0,0,0,0,0], tutored: []}, ... d];

            heroName.value = '';
             email.value = '';
             number.value = '';

            renderRows(data);
        }
    }
        
    renderRows(d);
};

init(data);

