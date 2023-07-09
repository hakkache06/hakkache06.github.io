
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>

const int BUFF_SIZE = 42 * 4096;

typedef struct t_clinets
{
    int id;
    char msg[100];
} t_clinets;

t_clinets clients[1024];

int max = 0;
int nex_id = 0;

fd_set fds,rfds,wfds;

char BufferWrite[BUFF_SIZE];
char Bufferread[BUFF_SIZE];



void fatal_error()
{
    write(2,"fatal error\n",12);
    exit(1);
}

void send_all(int file)
{
    for(int i =0; i <= max ;i ++)
        if(FD_ISSET(i,&rfds))
            send(i,BufferWrite,strlen(BufferWrite),0);
}

int main(int ac , char **av)
{
    if(ac!=2)
    {
        write(2,"Worng argument\n",15);
        exit(1);
    }

    bzero(&clients,sizeof(clients));
    FD_ZERO(&fds);

    int fdsock = socket(AF_INET,SOCK_STREAM,0);
    if(fdsock < 0)
        fatal_error();
    

}