const $ = document.querySelector.bind(document);
const container = $(".container")
const table = {
    json: [
        {
          Name: "Otto Clay",
          Age: 61,
          Country: 6,
          Address: "Ap #897-1459 Quam Avenue",
          Married: false
        },
        {
          Name: "Connor Johnston",
          Age: 73,
          Country: 7,
          Address: "Ap #370-4647 Dis Av.",
          Married: false
        },
        {
          Name: "Lacey Hess",
          Age: 29,
          Country: 7,
          Address: "Ap #365-8835 Integer St.",
          Married: false
        },
        {
          Name: "Timothy Henson",
          Age: 78,
          Country: 1,
          Address: "911-5143 Luctus Ave",
          Married: false
        },
        {
          Name: "Ramona Benton",
          Age: 43,
          Country: 5,
          Address: "Ap #614-689 Vehicula Street",
          Married: true
        },
        {
          Name: "Ezra Tillman",
          Age: 51,
          Country: 1,
          Address: "P.O. Box 738, 7583 Quisque St.",
          Married: true
        },
        {
          Name: "Dante Carter",
          Age: 59,
          Country: 1,
          Address: "P.O. Box 976, 6316 Lorem, St.",
          Married: false
        },
        {
          Name: "Christopher Mcclure",
          Age: 58,
          Country: 1,
          Address: "847-4303 Dictum Av.",
          Married: true
        },
        {
          Name: "Ruby Rocha",
          Age: 62,
          Country: 2,
          Address: "5212 Sagittis Ave",
          Married: false
        },
        {
          Name: "Imelda Hardin",
          Age: 39,
          Country: 5,
          Address: "719-7009 Auctor Av.",
          Married: false
        },
        {
          Name: "Jonah Johns",
          Age: 28,
          Country: 5,
          Address: "P.O. Box 939, 9310 A Ave",
          Married: false
        },
        {
          Name: "Herman Rosa",
          Age: 49,
          Country: 7,
          Address: "718-7162 Molestie Av.",
          Married: true
        },
        {
          Name: "Arthur Gay",
          Age: 20,
          Country: 7,
          Address: "5497 Neque Street",
          Married: false
        },
        {
          Name: "Xena Wilkerson",
          Age: 63,
          Country: 1,
          Address: "Ap #303-6974 Proin Street",
          Married: true
        },
        {
          Name: "Lilah Atkins",
          Age: 33,
          Country: 5,
          Address: "622-8602 Gravida Ave",
          Married: true
        },
        {
          Name: "Malik Shepard",
          Age: 59,
          Country: 1,
          Address: "967-5176 Tincidunt Av.",
          Married: false
        },
        {
          Name: "Keely Silva",
          Age: 24,
          Country: 1,
          Address: "P.O. Box 153, 8995 Praesent Ave",
          Married: false
        },
        {
          Name: "Hunter Pate",
          Age: 73,
          Country: 7,
          Address: "P.O. Box 771, 7599 Ante, Road",
          Married: false
        },
        {
          Name: "Mikayla Roach",
          Age: 55,
          Country: 5,
          Address: "Ap #438-9886 Donec Rd.",
          Married: true
        },
        {
          Name: "Upton Joseph",
          Age: 48,
          Country: 4,
          Address: "Ap #896-7592 Habitant St.",
          Married: true
        },
        {
          Name: "Jeanette Pate",
          Age: 59,
          Country: 2,
          Address: "P.O. Box 177, 7584 Amet, St.",
          Married: false
        },
        {
          Name: "Kaden Hernandez",
          Age: 79,
          Country: 3,
          Address: "366 Ut St.",
          Married: true
        },
        {
          Name: "Kenyon Stevens",
          Age: 20,
          Country: 3,
          Address: "P.O. Box 704, 4580 Gravida Rd.",
          Married: false
        },
        {
          Name: "Jerome Harper",
          Age: 31,
          Country: 5,
          Address: "2464 Porttitor Road",
          Married: false
        },
        {
          Name: "Jelani Patel",
          Age: 36,
          Country: 2,
          Address: "P.O. Box 541, 5805 Nec Av.",
          Married: true
        },
        {
          Name: "Keaton Oconnor",
          Age: 21,
          Country: 1,
          Address: "Ap #657-1093 Nec, Street",
          Married: false
        },
        {
          Name: "Bree Johnston",
          Age: 31,
          Country: 2,
          Address: "372-5942 Vulputate Avenue",
          Married: false
        },
        {
          Name: "Maisie Hodges",
          Age: 70,
          Country: 7,
          Address: "P.O. Box 445, 3880 Odio, Rd.",
          Married: false
        },
        {
          Name: "Kuame Calhoun",
          Age: 39,
          Country: 2,
          Address: "P.O. Box 609, 4105 Rutrum St.",
          Married: true
        },
        {
          Name: "Carlos Cameron",
          Age: 38,
          Country: 5,
          Address: "Ap #215-5386 A, Avenue",
          Married: false
        },
        {
          Name: "Fulton Parsons",
          Age: 25,
          Country: 7,
          Address: "P.O. Box 523, 3705 Sed Rd.",
          Married: false
        },
        {
          Name: "Wallace Christian",
          Age: 43,
          Country: 3,
          Address: "416-8816 Mauris Avenue",
          Married: true
        },
        {
          Name: "Caryn Maldonado",
          Age: 40,
          Country: 1,
          Address: "108-282 Nonummy Ave",
          Married: false
        },
        {
          Name: "Whilemina Frank",
          Age: 20,
          Country: 7,
          Address: "P.O. Box 681, 3938 Egestas. Av.",
          Married: true
        },
        {
          Name: "Emery Moon",
          Age: 41,
          Country: 4,
          Address: "Ap #717-8556 Non Road",
          Married: true
        },
        {
          Name: "Price Watkins",
          Age: 35,
          Country: 4,
          Address: "832-7810 Nunc Rd.",
          Married: false
        },
        {
          Name: "Lydia Castillo",
          Age: 59,
          Country: 7,
          Address: "5280 Placerat, Ave",
          Married: true
        },
        {
          Name: "Lawrence Conway",
          Age: 53,
          Country: 1,
          Address: "Ap #452-2808 Imperdiet St.",
          Married: false
        },
        {
          Name: "Kalia Nicholson",
          Age: 67,
          Country: 5,
          Address: "P.O. Box 871, 3023 Tellus Road",
          Married: true
        },
        {
          Name: "Brielle Baxter",
          Age: 45,
          Country: 3,
          Address: "Ap #822-9526 Ut, Road",
          Married: true
        },
        {
          Name: "Valentine Brady",
          Age: 72,
          Country: 7,
          Address: "8014 Enim. Road",
          Married: true
        },
        {
          Name: "Rebecca Gardner",
          Age: 57,
          Country: 4,
          Address: "8655 Arcu. Road",
          Married: true
        },
        {
          Name: "Vladimir Tate",
          Age: 26,
          Country: 1,
          Address: "130-1291 Non, Rd.",
          Married: true
        },
        {
          Name: "Vernon Hays",
          Age: 56,
          Country: 4,
          Address: "964-5552 In Rd.",
          Married: true
        },
        {
          Name: "Allegra Hull",
          Age: 22,
          Country: 4,
          Address: "245-8891 Donec St.",
          Married: true
        },
        {
          Name: "Hu Hendrix",
          Age: 65,
          Country: 7,
          Address: "428-5404 Tempus Ave",
          Married: true
        },
        {
          Name: "Kenyon Battle",
          Age: 32,
          Country: 2,
          Address: "921-6804 Lectus St.",
          Married: false
        },
        {
          Name: "Gloria Nielsen",
          Age: 24,
          Country: 4,
          Address: "Ap #275-4345 Lorem, Street",
          Married: true
        },
        {
          Name: "Illiana Kidd",
          Age: 59,
          Country: 2,
          Address: "7618 Lacus. Av.",
          Married: false
        },
        {
          Name: "Adria Todd",
          Age: 68,
          Country: 6,
          Address: "1889 Tincidunt Road",
          Married: false
        },
        {
          Name: "Kirsten Mayo",
          Age: 71,
          Country: 1,
          Address: "100-8640 Orci, Avenue",
          Married: false
        },
        {
          Name: "Willa Hobbs",
          Age: 60,
          Country: 6,
          Address: "P.O. Box 323, 158 Tristique St.",
          Married: false
        },
        {
          Name: "Alexis Clements",
          Age: 69,
          Country: 5,
          Address: "P.O. Box 176, 5107 Proin Rd.",
          Married: false
        },
        {
          Name: "Akeem Conrad",
          Age: 60,
          Country: 2,
          Address: "282-495 Sed Ave",
          Married: true
        },
        {
          Name: "Montana Silva",
          Age: 79,
          Country: 6,
          Address: "P.O. Box 120, 9766 Consectetuer St.",
          Married: false
        },
        {
          Name: "Kaseem Hensley",
          Age: 77,
          Country: 6,
          Address: "Ap #510-8903 Mauris. Av.",
          Married: true
        },
        {
          Name: "Christopher Morton",
          Age: 35,
          Country: 5,
          Address: "P.O. Box 234, 3651 Sodales Avenue",
          Married: false
        },
        {
          Name: "Wade Fernandez",
          Age: 49,
          Country: 6,
          Address: "740-5059 Dolor. Road",
          Married: true
        },
        {
          Name: "Illiana Kirby",
          Age: 31,
          Country: 2,
          Address: "527-3553 Mi Ave",
          Married: false
        },
        {
          Name: "Kimberley Hurley",
          Age: 65,
          Country: 5,
          Address: "P.O. Box 637, 9915 Dictum St.",
          Married: false
        },
        {
          Name: "Arthur Olsen",
          Age: 74,
          Country: 5,
          Address: "887-5080 Eget St.",
          Married: false
        },
        {
          Name: "Brody Potts",
          Age: 59,
          Country: 2,
          Address: "Ap #577-7690 Sem Road",
          Married: false
        },
        {
          Name: "Dillon Ford",
          Age: 60,
          Country: 1,
          Address: "Ap #885-9289 A, Av.",
          Married: true
        },
        {
          Name: "Hannah Juarez",
          Age: 61,
          Country: 2,
          Address: "4744 Sapien, Rd.",
          Married: true
        },
        {
          Name: "Vincent Shaffer",
          Age: 25,
          Country: 2,
          Address: "9203 Nunc St.",
          Married: true
        },
        {
          Name: "George Holt",
          Age: 27,
          Country: 6,
          Address: "4162 Cras Rd.",
          Married: false
        },
        {
          Name: "Tobias Bartlett",
          Age: 74,
          Country: 4,
          Address: "792-6145 Mauris St.",
          Married: true
        },
        {
          Name: "Xavier Hooper",
          Age: 35,
          Country: 1,
          Address: "879-5026 Interdum. Rd.",
          Married: false
        },
        {
          Name: "Declan Dorsey",
          Age: 31,
          Country: 2,
          Address: "Ap #926-4171 Aenean Road",
          Married: true
        },
        {
          Name: "Clementine Tran",
          Age: 43,
          Country: 4,
          Address: "P.O. Box 176, 9865 Eu Rd.",
          Married: true
        },
        {
          Name: "Pamela Moody",
          Age: 55,
          Country: 6,
          Address: "622-6233 Luctus Rd.",
          Married: true
        },
        {
          Name: "Julie Leon",
          Age: 43,
          Country: 6,
          Address: "Ap #915-6782 Sem Av.",
          Married: true
        },
        {
          Name: "Shana Nolan",
          Age: 79,
          Country: 5,
          Address: "P.O. Box 603, 899 Eu St.",
          Married: false
        },
        {
          Name: "Vaughan Moody",
          Age: 37,
          Country: 5,
          Address: "880 Erat Rd.",
          Married: false
        },
        {
          Name: "Randall Reeves",
          Age: 44,
          Country: 3,
          Address: "1819 Non Street",
          Married: false
        },
        {
          Name: "Dominic Raymond",
          Age: 68,
          Country: 1,
          Address: "Ap #689-4874 Nisi Rd.",
          Married: true
        },
        {
          Name: "Lev Pugh",
          Age: 69,
          Country: 5,
          Address: "Ap #433-6844 Auctor Avenue",
          Married: true
        },
        {
          Name: "Desiree Hughes",
          Age: 80,
          Country: 4,
          Address: "605-6645 Fermentum Avenue",
          Married: true
        },
        {
          Name: "Idona Oneill",
          Age: 23,
          Country: 7,
          Address: "751-8148 Aliquam Avenue",
          Married: true
        },
        {
          Name: "Lani Mayo",
          Age: 76,
          Country: 1,
          Address: "635-2704 Tristique St.",
          Married: true
        },
        {
          Name: "Cathleen Bonner",
          Age: 40,
          Country: 1,
          Address: "916-2910 Dolor Av.",
          Married: false
        },
        {
          Name: "Sydney Murray",
          Age: 44,
          Country: 5,
          Address: "835-2330 Fringilla St.",
          Married: false
        },
        {
          Name: "Brenna Rodriguez",
          Age: 77,
          Country: 6,
          Address: "3687 Imperdiet Av.",
          Married: true
        },
        {
          Name: "Alfreda Mcdaniel",
          Age: 38,
          Country: 7,
          Address: "745-8221 Aliquet Rd.",
          Married: true
        },
        {
          Name: "Zachery Atkins",
          Age: 30,
          Country: 1,
          Address: "549-2208 Auctor. Road",
          Married: true
        },
        {
          Name: "Amelia Rich",
          Age: 56,
          Country: 4,
          Address: "P.O. Box 734, 4717 Nunc Rd.",
          Married: false
        },
        {
          Name: "Kiayada Witt",
          Age: 62,
          Country: 3,
          Address: "Ap #735-3421 Malesuada Avenue",
          Married: false
        },
        {
          Name: "Lysandra Pierce",
          Age: 36,
          Country: 1,
          Address: "Ap #146-2835 Curabitur St.",
          Married: true
        },
        {
          Name: "Cara Rios",
          Age: 58,
          Country: 4,
          Address: "Ap #562-7811 Quam. Ave",
          Married: true
        },
        {
          Name: "Austin Andrews",
          Age: 55,
          Country: 7,
          Address: "P.O. Box 274, 5505 Sociis Rd.",
          Married: false
        },
        {
          Name: "Lillian Peterson",
          Age: 39,
          Country: 2,
          Address: "6212 A Avenue",
          Married: false
        },
        {
          Name: "Adria Beach",
          Age: 29,
          Country: 2,
          Address: "P.O. Box 183, 2717 Nunc Avenue",
          Married: true
        },
        {
          Name: "Oleg Durham",
          Age: 80,
          Country: 4,
          Address: "931-3208 Nunc Rd.",
          Married: false
        },
        {
          Name: "Casey Reese",
          Age: 60,
          Country: 4,
          Address: "383-3675 Ultrices, St.",
          Married: false
        },
        {
          Name: "Kane Burnett",
          Age: 80,
          Country: 1,
          Address: "759-8212 Dolor. Ave",
          Married: false
        },
        {
          Name: "Stewart Wilson",
          Age: 46,
          Country: 7,
          Address: "718-7845 Sagittis. Av.",
          Married: false
        },
        {
          Name: "Charity Holcomb",
          Age: 31,
          Country: 6,
          Address: "641-7892 Enim. Ave",
          Married: false
        },
        {
          Name: "Kyra Cummings",
          Age: 43,
          Country: 4,
          Address: "P.O. Box 702, 6621 Mus. Av.",
          Married: false
        },
        {
          Name: "Stuart Wallace",
          Age: 25,
          Country: 7,
          Address: "648-4990 Sed Rd.",
          Married: true
        },
        {
          Name: "Carter Clarke",
          Age: 59,
          Country: 6,
          Address: "Ap #547-2921 A Street",
          Married: false
        }
      ],
    country:[
        { Name: "", Id: 0 },
        { Name: "United States", Id: 1 },
        { Name: "Canada", Id: 2 },
        { Name: "United Kingdom", Id: 3 },
        { Name: "France", Id: 4 },
        { Name: "Brazil", Id: 5 },
        { Name: "China", Id: 6 },
        { Name: "Russia", Id: 7 }
      ],
    sortBy:{
        Name: 0,
        Age: 0,
        Address: 0,
        Country: 0,
        Married: 0,
        choose: ""
      },

        dataShow: [],
        table : null,
        editActive: 0,
        currentPage: 1,
        page: 0, //tong page
        totalRecord: 15, // so luong record trong trang
        paginationSize: 2,
        tableBody: null,
        attrFilter: null,
        isMarried: 0,
        attrSort: null,
        selectCountry: null,
        pagination: null,
        button: null,
        buttonFilter: null,
        choose : "",
        editActive: 0,


    // tao elemetn
    create(name, list=[],  str = ""){
        var container = document.createElement(name)
        if(list.length>0)
            list.map((item) => container.setAttribute(item.key,item.value));
        if(str != ""){
            var text = document.createTextNode(str);


            container.appendChild(text)
        }
        return container;
    },


    renderTable(){
        let table = this.create("div", [{key: "class", value: "container"}, {key: "id", value: "container"}] )
        
        table.appendChild(this.content())
        table.appendChild(this.pagination())
        this.page = Math.ceil(this.dataShow.length / this.totalRecord);

        this.table = table;
        container.appendChild(table);
    },

    content(){
        const tableContent = this.create("table", [{ key: "class", value: "table-content" }]);
        
        
        let tableBody = document.createElement("tbody");
        let tableHeader = document.createElement("th");
        

        tableHeader.appendChild(this.header())
        tableHeader.appendChild(this.filter())

        this.tableBody = tableBody;

        tableContent.appendChild(tableHeader)
        tableContent.appendChild(tableBody)

        return tableContent;
    },

    header(){
        let tableRow = this.create("tr", [{key: "class", value: "sort"}])
        this.attrSort = tableRow;
        tableRow.innerHTML = `<th>
        <a title='Name' href='' class='sort-by-name'>
          
          name</a>
      </th>
      <th><a title='Age' href='' class='sort-by-age'>
      
          age
        </a></th>
      <th><a title='Address' href='' class='sort-by-address'>
      
          address
        </a></th>
      <th><a title='Country' href='' class='sort-by-country'>
      
          country</a></th>
      <th><a title='Married' href='' class='sort-by-married'>
      
          is married</a></th>
      <th><button id="btn-filter" class="fa fa-search"></button></th>`;

      this.buttonFilter =  tableRow.querySelector("#btn-filter")
      return tableRow;
    },

    pagination(){
        let container = this.create("div", [{ key: "class", value: "pagination" }]);
        let item = this.create("ul", [{ key: "class", value: "item-ul" }]);
          
        this.pagination = item;
        container.appendChild(item);
      
      
        return container;
    },

    

    filter(){
        let tableRow = this.create("tr", [{ key: "class", value: "filter hidden"}]);
        tableRow.innerHTML = `<td>
        <input type="text" class="filter-name">
      </td>
      <td>
        <input type="number" class="filter-age">
      </td>
      <td>
        <input type="text" class="filter-address">
      
      </td>
      <td class="text-center">
        <select class="filter-country">
          ${this.countryPicker()}
        </select>
      
      </td>
      <td>
          <select id="married">
            <option value="0"></option>
            <option value="true">true</option>
            <option value="false">false</option>
        </select>
      </td>

      

      <td>
        <button class="btn-search fa fa-search"></button>
        <button class="btn-filter"><i class="fa-solid fa-filter"></i></button>
      </td>`;
        this.attrFilter = tableRow;
        // this.attrFilter.querySelector(".filter-maried").indeterminate = true;
        this.selectCountry = tableRow.querySelector(".filter-country");
        return tableRow;
    },

    renderData(data = this.dataShow){
      var firstItem, lastItem;
      textRecord = "";
      this.editActive = 0;
      

      if(this.currentPage>0 && this.currentPage <= this.totalRecord){
        firstItem = this.totalRecord * (this.currentPage - 1);
        if(firstItem + this.totalRecord < data.length){
          lastItem = firstItem + this.totalRecord
        }
        else{
          lastItem = data.length
        };
        for(let i = firstItem; i < lastItem; i++){
          let{ Name, Age, Country, Address, Married } = data[i];
          textRecord += ` <tr class='customer' data-index=${i}>
          <td class='name'>${Name}</td>
          <td class="text-right">${Age}</td>
          <td>${Address} </td>
          <td class="text-center">${
            this.country[Country].Name
            }</td>
          <td class="text-center"><input disabled type="checkbox" ${ Married ? "checked" : "" }></td>
          <td class="text-center btn-container">
            <button class="edit">
              <i class="fa-solid fa-pencil"></i>
            </button>
            <button class="delete">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>`
        }

        this.tableBody.innerHTML = textRecord;

      }
    },

    // reset(){
    //   this.totalPage = Math.ceil(this.dataShow.length / this.totalRecord);
    //   this.currentPage = 1;
    // },

    renderPagination(){

      let str ="";
      var lastPageNumber = 0;
      var count = 0;
      
      let threeDot = `<li><a href='' class='list-page'>...</a></li>`;

      if(this.currentPage + this.paginationSize < this.page){
        lastPageNumber = this.currentPage + this.paginationSize;
      }
      else{
        lastPageNumber = this.page
      }
      
      if(this.paginationSize < this.currentPage){
        str += threeDot;
      }


      
      
      if(this.currentPage > this.paginationSize){
        count = this.currentPage - 1;
      }else{
        count = 1;
      }
      for(let i = count; i <= lastPageNumber; i++){
        str += `<li><a href='#' data-index=${i} class='list-page ${
          parseInt(this.currentPage) == i ? "active" : ""
        }'>${i}</a></li>`;
      }
      if (this.currentPage < this.page - this.paginationSize) {
        str += threeDot;
      }


      if(this.page > 0){
        var h = ` <li class="pagination__item">
        Pages:
        </li>
        <li>
          <ul class="flex item-ul">
          ${
            parseInt(this.currentPage) !== 1 ? `<li><a data-index= 1  href='' class='list-page btn-first'>First</a></li> <li><a  href='#' class='prev'>Prev</a></li>`: ""
          }
          ${str}
          ${
            parseInt(this.currentPage) !== this.page ? `<li><a  href='' class='next'>Next</a></li><li"><a data-index=${this.page}  href='#' class='list-page btn-last'>Last</a></li>`: ""
          }
          
          </ul>
        </li>
        <li class="item-ul">${this.currentPage} of ${this.page}</li>`;
      }
      this.pagination.innerHTML = h;
    },
    
    
    //function
    paginationEvent(page){
      this.currentPage = parseInt(page)
      this.renderData();
      this.renderPagination();
    },

    countryPicker(country = 0){
      let options = this.country.map(
        (ct) =>
          `<option ${country === ct.Id ? "selected" : ""} value="${ct.Id}">${
            ct.Name
          }</option>`
      );
      return options.join("");
    },

    sortEvent(field){
      if (this.sortBy[field] === 0) {
        this.dataShow = [...this.dataShow].sort((a,b) => (
          a[field]>=b[field] ? 1 : -1
          ));
      }
      if (this.sortBy[field] === 1) {
        this.dataShow = [...this.dataShow].sort((a,b) => (
          b[field]>=a[field] ? 1 : -1
        ));
      }
      
      this.renderData();

      this.renderSort(field);
      
    },

    renderSort(field){
      this.sortBy.choose = field;
      this.sortBy[field] = this.sortBy[field] ? 0 : 1;
    },

    filterEvent(filter){
      let name = filter.querySelector(".filter-name").value;
      let age = parseInt(filter.querySelector(".filter-age").value);
      let address = filter.querySelector(".filter-address").value;
      let country = parseInt(filter.querySelector(".filter-country").value);
      let married = document.getElementById("married").value;
      
      this.handleUIButtonSort();

      this.dataShow = this.json.filter((item) => {
        return item.Name.toLowerCase().includes(name.toLowerCase());
      });
  
      if (address) {
        this.dataShow = this.dataShow.filter((item) =>
          item.Address.toLowerCase().includes(address.toLowerCase())
        );
      }
  
      if (age) {
        this.dataShow = this.dataShow.filter((item) => item.Age === age);
      }
  
  
      if (married === "true" || married === "false") {
        this.dataShow = this.dataShow.filter(
          (d) => String(d.Married) == married
        );
      }

      if (country) {
        this.dataShow = this.dataShow.filter((item) => item.Country === country);
      }
      //reset
      this.totalPage = Math.ceil(this.dataShow.length / this.totalRecord);
      this.currentPage = 1;
      this.renderData();
      this.renderPagination();
    },

    removeFilterEvent(){
      this.dataShow = this.json;
      this.isMarried = 0;
      

      this.attrFilter.querySelector("filter-name").value= "";
      this.attrFilter.querySelector("filter-age").value= "";
      this.attrFilter.querySelector("filter-address").value= "";
      this.attrFilter.querySelector("filter-country").value= 0;
      this.attrFilter.querySelector("married").value=0;

      //reset
      this.totalPage = Math.ceil(this.dataShow.length / this.totalRecord);
      this.currentPage = 1;
      this.handleUIButtonSort();
      this.renderData();
      this.renderPagination();
    },
    
    handleUIButtonSort() {
      const prevSorted = this.sortBy.choose;
  
      let container;
      if (prevSorted) {
        container = this.table.querySelector(`.sort[title=${prevSorted}]`);
      }
  
      if (this.sortBy[prevSorted]) {
        container?.querySelector(".desc").classList.add("hidden");
      }
      if (!this.sortBy[prevSorted]) {
        container?.querySelector(".asc").classList.add("hidden");
      }
    },

    actionListener(){

      this.buttonFilter.addEventListener("click", ()=>{
        this.attrFilter.classList.toggle("hidden")
      })

      this.pagination.addEventListener("click", (a)=>{
        
        if (a.target.className == "next") 
          this.paginationEvent(this.currentPage + 1);

        if (a.target.className == "prev") 
          this.paginationEvent(this.currentPage - 1);
        
        if (a.target.className.includes("list-page")) 
          this.paginationEvent(a.target.dataset.index);
        
        
        a.preventDefault();

      });

      this.attrSort.addEventListener("click", (a)=>{
        a.preventDefault(); 
        if(a.target.className.includes("sort")){
          this.sortEvent(a.target.getAttribute("title"))
        }
      })
      
      // let tam = null;

      // this.tableBody.addEventListener("click", (a)=>{
      //   if (a.target.className.includes("edit")) {
      //     if (that !== a.target.closest(".customer") && that !== null) {
      //       that.innerHTML = this.choose;
      //     }
  
      //     that = a.target.closest(".customer");
      //     this.editActive = 1;
      //     this.handleUIEdit(e.target.closest(".customer"));
      //   }
  
      // })

      this.attrFilter.addEventListener("click", (a) => {
        if (a.target.className.includes("btn-search")) {
          this.filterEvent(a.currentTarget);
        }
  
        if (a.target.className.includes("btn-filter")) {
          this.removeFilterEvent();
        }
      });

    },

    init() {
        this.dataShow = this.json;
        this.renderTable();
        this.renderData();
        this.renderPagination();
        this.actionListener();
      }
};

function init() {
    table.init();
}

init();