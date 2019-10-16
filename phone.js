function Mobile(battery, draft, inbox, sent, status) {
    this.battery = battery;
    this.draft = draft;
    this.inbox = inbox;
    this.sent = sent;
    this.status = true;
    this.getStatus = function () {
        return this.status
    };
// sạc pin
    this.chargeBattery = function () {
        if (this.battery < 90) {
            this.battery += 10;
        }
    }
    // viết tin nhắn, lưu tin nhắn vào nháp
    this.writeMessage = function (newMessage) {
        if (this.status) {
            this.draft = newMessage;
            this.battery--;
        }
    }

    // gửi tin nhắn
    this.sentMessage = function (mobile) {

        this.sent = this.draft;
        mobile.inbox = this.draft;
        this.draft = '';
        this.battery--;
        mobile.battery--;

    }
    this.getSentMessage = function () {
        this.battery--;
        return this.sent;
    }

    this.getInbox = function () {
        this.battery--;
        return this.inbox;

    }
}

let samSung = new Mobile(100, '123', '', '', true);
let iPhone = new Mobile(100, '', '', '', true);


function sentMes() {

    samSung.writeMessage(document.getElementById('box').value);
    samSung.sentMessage(iPhone);
}

function getMessage() {
    document.getElementById('result').innerHTML = iPhone.getInbox();
}

function senMes() {
    iPhone.writeMessage(document.getElementById('box2').value);
    iPhone.sentMessage(samSung);
}

function getMessage2() {
    document.getElementById('result').innerHTML = samSung.getInbox();
}