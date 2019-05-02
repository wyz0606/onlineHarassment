(function() {
  var db = firebase.firestore();
  var storageRef = firebase.storage().ref();
  var thirdBK = $("#thirdBK");
  db.collection("cyberShadow")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        var first = doc.data().firstname;
        var last = doc.data().lastname;
        var full = first + last;

        var introduction = doc.data().introduction;
        var subtitle = doc.data().subtitle;
        var time = doc.data().time;

        var container = $('<div></div>');
        var box1 = $('<div></div>');
        var box2 = $('<div></div>');
        var name = $('<h1></h1>');
        var lifetime = $('<p></p>');
        var head = $('<h1></h1>');
        var brief = $('<p></p>');

        container.addClass("container");
        box1.attr("id", "box1");
        box2.attr("id", "box2");
        name.addClass("name");
        lifetime.addClass("time");
        head.addClass("brief");
        brief.addClass("briefIntro");

        console.log(time);
        // console.log(brief);
        // console.log(time);

        name.text(first + " " + last);
        lifetime.text(time);
        head.text("Brief");
        brief.text(subtitle);

        
        storageRef
          .child(full + ".png")
          .getDownloadURL()
          .then(function(url) {
            var img = $('<img>');
            img.attr("src", url);
            img.addClass("image");
            box1.append(img);
            box1.append(name);
            box1.append(lifetime);
          });

        box2.append(head);
        box2.append(brief);
        container.append(box1);
        container.append(box2);
        thirdBK.append(container);
      });
    });
})();
