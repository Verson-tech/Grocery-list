 We can access the collection of the **`<form>`** elements using 'elements' property by typing ```sql
console.dir(form)
``` in the dev tools console:

![dev tools console](./Capture6.PNG)


Here we can access, for example,
📘 **Input**

```sql
<input type="text" id="product" name="qty">
```
  
using the following: 
```sql
form.elements.qty.value
```

![dev tools console](./Capture7.PNG)
