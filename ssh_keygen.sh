#!/bin/bash
ssh_keygen(){
        echo "####### | Creating ssh key... | ####### "
        echo "####### | Enter key_string for key generation | ####### "
        read  -p "|> " key_string
        ssh-keygen  -t ed25519 -f ~/.ssh/$key_string
      
        echo "#######"
        echo "#######"
        sudo chmod 600 ~/.ssh/$key_string
        sudo chmod 600 ~/.ssh/$key_string.pub
        

        
        echo "########### |  EVAL SSH | ###########"
        eval "$(ssh-agent -s)"
        ssh-add ~/.ssh/$key_string

        echo " ####### | This is the public key, | ####### "
        echo " ####### | copy-paste it to your github repository , continue |"
        echo ""
        cat ~/.ssh/$key_string.pub
}
ssh_keygen