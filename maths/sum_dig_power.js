function sumDigPow(a, b) { 
  l=[]; for (i=a;i<=b;i++) {s=i+""; c=0; for (j=0;j<s.length;j++) c+=Math.pow(s.charCodeAt(j)-48,j+1); if (c==i) l.push(i)}
  return l;
}
