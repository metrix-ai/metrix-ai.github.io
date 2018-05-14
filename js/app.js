function strtCan() { }
function email_valid(t) {
    re.test(t.value) ? (t.classList.remove("error"), t.parentElement.classList.remove("error")) : (t.classList.add("error"), t.parentElement.classList.add("error"))
}
var scroll_btn_1 = document.getElementById("scroll__bottom"),
    V = .2;
scroll_btn_1.addEventListener("click", function(t) {
    function e(t) {
        null === r && (r = t);
        var o = t - r,
            s = n < 0 ? Math.max(i - o / V, i + n) : Math.min(i + o / V, i + n);
        window.scrollTo(0, s), s != i + n ? requestAnimationFrame(e) : location.hash = a
    }
    t.preventDefault();
    var i = window.pageYOffset,
        a = "#m",
        n = document.querySelector(a).getBoundingClientRect().top,
        r = null;
    requestAnimationFrame(e)
}, !1);
var scroll_btn_2 = document.getElementById("scroll__bottom_2");
scroll_btn_2.addEventListener("click", function(t) {
    function e(t) {
        null === r && (r = t);
        var o = t - r,
            s = n < 0 ? Math.max(i - o / V, i + n) : Math.min(i + o / V, i + n);
        window.scrollTo(0, s), s != i + n ? requestAnimationFrame(e) : location.hash = a
    }
    t.preventDefault();
    var i = window.pageYOffset,
        a = this.href.replace(/[^#]*(.*)/, "$1"),
        n = document.querySelector(a).getBoundingClientRect().top,
        r = null;
    console.log(a), requestAnimationFrame(e)
}, !1);
var fix_bl = document.getElementById("fixec_block"),
    fix_po = fix_bl.style.position,
    fix_pa = fix_bl.parentElement;
window.onscroll = function() {
    fix_pa.getBoundingClientRect().top <= 0 ? "fixed" != fix_po && (fix_bl.style.position = "fixed") : "static" != fix_po && (fix_bl.style.position = "static")
}, window.addEventListener("load", function() {
    strtCan(), fix_pa.style.height = fix_bl.getBoundingClientRect().height + 35 + "px"
}), window.addEventListener("resize", function() {
    strtCan(), fix_pa.style.height = fix_bl.getBoundingClientRect().height + 35 + "px"
});
var form_1 = document.querySelector(".m__f--form [type=submit]"),
    re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    in_email = form_1.parentElement.querySelector("input[name=email]");
in_email.oninput = function() {
    this.value.length > 7 && email_valid(this)
}, void 0 != form_1 && form_1.addEventListener("click", function(t) {
    t.preventDefault();
    for (var e = this.parentElement, i = !1, a = e.querySelectorAll("input[required]"), n = e.querySelector(".m__f--form__out"), r = 0; r < a.length; r++) "" == a[r].value ? (i = !0, a[r].classList.add("error"), a[r].parentElement.classList.add("error")) : (a[r].classList.remove("error"), a[r].parentElement.classList.remove("error"), "email" == a[r].name && (re.test(a[r].value) ? (a[r].classList.remove("error"), a[r].parentElement.classList.remove("error")) : (a[r].classList.add("error"), a[r].parentElement.classList.add("error"), i = !0)));
    if (!i) {
        for (var o = e.querySelector("input[name=email]").value, s = e.querySelector("input[name=company]").value, l = e.querySelector("input[name=name]").value, c = e.querySelector("textarea").value, r = 0; r < a.length; r++) a[r].value = "", a[r].classList.remove("error"), a[r].parentElement.classList.remove("error");
        e.querySelector("textarea").value = "";
        var h = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        return h.open("POST", "https://mandrillapp.com/api/1.0/messages/send.json"), h.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), h.onreadystatechange = function() {
            4 == h.readyState && (200 == h.status ? (console.log("sending"), n.classList.add("active")) : alert("Пожалуйста, проверьте соединение с интернетом или перезапустите браузер. После этого отправьте заявку снова."))
        }, h.send(JSON.stringify({
            key: "3nHfBfKZxETJ-VYZjMx4cw",
            message: {
                from_email: "metrix@smter.ru",
                to: [{
                    email: "d@metrix.ai",
                    type: "to"
                }],
                autotext: "true",
                subject: "C сайта METRIX",
                html: "<h2>Name - " + l + ".</h2><h2>Company - " + s + ".</h2><h2>Email - " + o + ".</h2><h2>Message - " + c + ".</h2>"
            }
        })), !1
    }
});
