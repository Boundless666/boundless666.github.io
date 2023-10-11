#include <string.h>
struct key
{
    char *word;
    int count;
} keytab[] = { { "auto", 0 },	  { "break", 0 },    { "case", 0 },
	       { "char", 0 },	  { "const", 0 },    { "continue", 0 },
	       { "default", 0 },  { "do", 0 },	     { "double", 0 },
	       { "else", 0 },	  { "enum", 0 },     { "extern", 0 },
	       { "float", 0 },	  { "for", 0 },	     { "goto", 0 },
	       { "if", 0 },	  { "int", 0 },	     { "long", 0 },
	       { "register", 0 }, { "return", 0 },   { "short", 0 },
	       { "signed", 0 },	  { "sizeof", 0 },   { "static", 0 },
	       { "struct", 0 },	  { "switch", 0 },   { "typedef", 0 },
	       { "union", 0 },	  { "unsigned", 0 }, { "void", 0 },
	       { "volatile", 0 }, { "while", 0 } };


int main(){

    return 0;
}

int binsearch(char *word, struct key tab[], int n){
    int cond;
    int low, mid, high;
    low = 0;
    high = n - 1;
    while(low <= high){
        mid = (low + high) / 2;
        if((cond = strcmp(word, tab[mid].word)) < 0)
            high = mid - 1;
        else if(cond > 0)
            low = mid + 1;
        else
            return mid;
    }
    return -1;
}

struct key *binsearch(char *word, struct key *tab, int n){
    int cond;
    struct key *low, *mid, *high;
    low = tab;
    high = tab + n -1;
    while(low < high){
        mid =low + (high - low) / 2;
        if((cond = strcmp(word, mid->word)) < 0)
            high = mid - 1;
        else if(cond > 0)
            low = mid + 1;
        else
            return mid;
    }
    return NULL;
}

int getword(char *word, int lim){

}