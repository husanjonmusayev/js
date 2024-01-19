// data.forEach((country) => {
//   const siteList = document.getElementById("siteList");
//   const flagLink = country.flags.svg;
//   const flagAlt = country.flags.alt;
//   const countryName = country.name.common;
//   const region = country.region;
//   const capital = country.capital[0];

//   const div = creatElem("div", "img-wrapper");
//   const a = creatElem("a", "card-link");
//   a.setAttribute("href", `./about.html?slug=${country.name}`);
//   const img = creatElem("img", "country-flag");
//   img.setAttribute("alt", flagAlt);
//   img.src = flagLink;
//   a.appendChild(img);
//   div.appendChild(a);
//   const li = creatElem("li", "site-item");
//   const h1 = creatElem("h1", "country-name", countryName);
//   li.appendChild(h1);
//   const div2 = creatElem("div", "card-text-wrapper");
//   const p1 = creatElem("p", "card-text", "Population: ");
//   const span1 = creatElem("span", "span-text", population);
//   p1.appendChild(span1);
//   const p2 = creatElem("p", "card-text", "Region: ");
//   const span2 = creatElem("span", "span-text", region);
//   span2.classList.add("sort-region");
//   p2.appendChild(span2);

//   const p3 = creatElem("p", "card-text", "Capital: ");
//   const span3 = creatElem("span", "span-text", capital);
//   p3.appendChild(span3);
//   div2.append(p1, p2, p3);
//   li.append(div, h1, div2);
//   siteList.appendChild(li);
// });

// localStorage

// localStorage.setItem("User", JSON.stringify("user"))
