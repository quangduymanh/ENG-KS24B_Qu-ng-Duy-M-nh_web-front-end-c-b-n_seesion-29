let ContactManager = {
    contacts: [],
    addContact() {
        let id = this.contacts.length ? this.contacts[this.contacts.length - 1].id + 1 : 1; 
        let name = prompt("Nhập tên:");
        let email = prompt("Nhập email:");
        let phone = prompt("Nhập số điện thoại:");
        if (!name || !email || !phone) {
            alert("Thông tin không hợp lệ!");
            return;
        }
        this.contacts.push({ id, name, email, phone });
        alert("Liên hệ đã được thêm!");
    },
    showContacts() {
        if (this.contacts.length === 0) {
            alert("Danh bạ trống!");
        } else {
            console.table(this.contacts);
            alert("Danh bạ đã được hiển thị trên console!");
        }
    },
    searchContact() {
        let phone = prompt("Nhập số điện thoại cần tìm:");
        let result = this.contacts.find(contact => contact.phone === phone);
        if (result) {
            console.table(result);
            alert("Đã tìm thấy liên hệ, xem chi tiết trong console.");
        } else {
            alert("Không tìm thấy liên hệ!");
        }
    },
    updateContact() {
        let id = +prompt("Nhập ID liên hệ cần cập nhật:");
        let contact = this.contacts.find(contact => contact.id === id);
        if (contact) {
            contact.name = prompt("Nhập tên mới:", contact.name) || contact.name;
            contact.email = prompt("Nhập email mới:", contact.email) || contact.email;
            contact.phone = prompt("Nhập số điện thoại mới:", contact.phone) || contact.phone;
            alert("Liên hệ đã được cập nhật!");
        } else {
            alert("Không tìm thấy liên hệ!");
        }
    },
    deleteContact() {
        let id = +prompt("Nhập ID liên hệ cần xóa:");
        let index = this.contacts.findIndex(contact => contact.id === id);
        if (index !== -1) {
            if (confirm(`Bạn có chắc muốn xóa liên hệ ${this.contacts[index].name}?`)) {
                this.contacts.splice(index, 1);
                alert("Liên hệ đã bị xóa!");
            }
        } else {
            alert("Không tìm thấy liên hệ!");
        }
    },
    mainMenu() {
        while (true) {
            let choice = +prompt(
                "Chọn chức năng:\n" +
                "1. Thêm liên hệ\n" +
                "2. Hiển thị danh bạ\n" +
                "3. Tìm kiếm theo số điện thoại\n" +
                "4. Cập nhật liên hệ\n" +
                "5. Xóa liên hệ\n" +
                "6. Thoát"
            );

            switch (choice) {
                case 1: this.addContact(); break;
                case 2: this.showContacts(); break;
                case 3: this.searchContact(); break;
                case 4: this.updateContact(); break;
                case 5: this.deleteContact(); break;
                case 6: alert("Thoát chương trình!"); return;
                default: alert("Lựa chọn không hợp lệ");
            }
        }
    }
};
ContactManager.mainMenu();
