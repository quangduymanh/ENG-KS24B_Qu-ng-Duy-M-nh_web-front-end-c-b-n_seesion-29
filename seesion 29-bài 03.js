RestaurantMenu = {
    categories: {},
    addDish() {
        let category = prompt("Nhập danh mục món ăn (VD: Món Chính, Món Phụ, Đồ Uống):");
        let name = prompt("Nhập tên món ăn:");
        let price = +prompt("Nhập giá món ăn:");
        let description = prompt("Nhập mô tả món ăn:");

        if (!category || !name || isNaN(price) || !description) {
            alert("Dữ liệu nhập không hợp lệ!");
            return;
        }

        if (!this.categories[category]) this.categories[category] = [];
        this.categories[category].push({ name, price, description });

        alert(`Món ăn "${name}" đã được thêm vào danh mục "${category}"!`);
    },

    deleteDish() {
        let name = prompt("Nhập tên món ăn cần xóa:");
        for (let category in this.categories) {
            let index = this.categories[category].findIndex(dish => dish.name.toLowerCase() === name.toLowerCase());
            if (index !== -1) {
                if (confirm(`Bạn có chắc muốn xóa món "${name}" khỏi danh mục "${category}" không?`)) {
                    this.categories[category].splice(index, 1);
                    alert(`Món "${name}" đã bị xóa!`);
                    return;
                }
            }
        }
        alert("Không tìm thấy món ăn");
    },

    updateDish() {
        let name = prompt("Nhập tên món ăn cần cập nhật:");
        for (let category in this.categories) {
            let dish = this.categories[category].find(d => d.name.toLowerCase() === name.toLowerCase());
            if (dish) {
                dish.name = prompt("Nhập tên mới:", dish.name) || dish.name;
                dish.price = +prompt("Nhập giá mới:", dish.price) || dish.price;
                dish.description = prompt("Nhập mô tả mới:", dish.description) || dish.description;
                alert("Món ăn đã được cập nhật!");
                return;
            }
        }
        alert("Không tìm thấy món ăn!");
    },

    showMenu() {
        let isEmpty = true;
        for (let category in this.categories) {
            isEmpty = false;
            break;
        }
        if (isEmpty) {
            alert("Menu trống!");
            return;
        }

        for (let category in this.categories) {
            console.log(`\n${category.toUpperCase()}`);
            console.table(this.categories[category]);
        }
        alert("Menu đã hiển thị trên console");
    },

    searchDish() {
        let name = prompt("Nhập tên món ăn cần tìm:");
        let results = [];

        for (let category in this.categories) {
            let foundDishes = this.categories[category].filter(dish => dish.name.toLowerCase().includes(name.toLowerCase()));
            results = results.concat(foundDishes);
        }

        if (results.length > 0) {
            console.log(results);
            alert("Kết quả tìm kiếm đã hiển thị trên console");
        } else {
            alert("Không tìm thấy món ăn");
        }
    },

    mainMenu() {
        while (true) {
            let choice = parseInt(prompt(
                "Chọn chức năng:\n" +
                "1. Thêm món ăn\n" +
                "2. Xóa món ăn\n" +
                "3. Cập nhật món ăn\n" +
                "4. Hiển thị menu\n" +
                "5. Tìm kiếm món ăn\n" +
                "6. Thoát"
            ));

            switch (choice) {
                case 1: this.addDish(); break;
                case 2: this.deleteDish(); break;
                case 3: this.updateDish(); break;
                case 4: this.showMenu(); break;
                case 5: this.searchDish(); break;
                case 6: alert("Thoát chương trình"); return;
                default: alert("Lựa chọn không hợp lệ");
            }
        }
    }
};
