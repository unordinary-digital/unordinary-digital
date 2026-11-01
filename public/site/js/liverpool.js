const practice = ["We can meet in person. Coffee's on you, though.", "We understand the local market and who you're up against.", 'Your Google Business Profile and site are set up to show up for searches in your area.', 'You get a studio you can actually reach.'];
function Liverpool() {
  return React.createElement(Page, {
    current: "liverpool.html"
  }, React.createElement(ScrollHero, {
    eyebrow: "Liverpool",
    cta: false,
    title: "Built in Liverpool. For Liverpool.",
    sub: "A local studio for local businesses. We know the city, the competition and what actually works here.",
    media: slot('liverpool-hero', 'Liverpool photo')
  }), React.createElement(Statement, null, "We're based in Liverpool and we work with businesses across the city and the North West. That's not a footnote. It's the point."), React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, React.createElement("div", {
    className: "split2"
  }, React.createElement("div", {
    className: "sec-head",
    style: {
      padding: 0,
      margin: 0
    }
  }, React.createElement("p", {
    className: "label",
    "data-reveal": true
  }, "What that means in practice"), React.createElement("p", {
    className: "sec-intro",
    "data-reveal": true
  }, "Local businesses win on being local. Your website should say so, your Google profile should prove it, and your video should look like it belongs here. We build all three with that in mind.")), React.createElement("div", {
    className: "practice"
  }, practice.map((t, i) => React.createElement("div", {
    key: i,
    "data-reveal": true,
    style: {
      transitionDelay: i * .08 + 's'
    }
  }, React.createElement("b", null, String(i + 1).padStart(2, '0')), React.createElement("span", null, t)))))), React.createElement("section", {
    style: {
      paddingBottom: '16vh'
    }
  }, React.createElement("div", {
    className: "sec-head",
    style: {
      marginBottom: '5vh'
    }
  }, React.createElement("p", {
    className: "label",
    "data-reveal": true
  }, "Who we work with")), React.createElement(Band, {
    light: true,
    items: ['Restaurants and cafes', 'Trades', 'Health and wellbeing', 'Professional services']
  })), React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, React.createElement("div", {
    className: "away"
  }, React.createElement("h2", {
    "data-split": true
  }, React.createElement(Dot, null, "Not in Liverpool?")), React.createElement("p", {
    "data-reveal": true
  }, "We work with companies further afield too. Distance doesn't change the quality, only the coffee situation."))), React.createElement(Finale, {
    title: "Local business? Let's talk."
  }));
}
mount(React.createElement(Liverpool, null));