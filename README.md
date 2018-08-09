# mixins

This code entails scss code that handles css transforms,css transitions, animations and other elements and classes
Read more on (sass-community-blog) [sass-lang.com]

```
npm install _mixins
```
### main.scss
write in your sass file
```
@import "src/mixins";
//make sure your mixins file is in your sass folder 

#mainroot{
  @include box-shadow(1px 1px 1px balck,-1px 0px 1px silver);
  @include border-radius(1px 0px 1px 12px);
}

```
