//
//  InputView.swift
//  StateDemo
//
//  Created by Andre Pham on 31/3/2023.
//

import SwiftUI

struct InputView: View {
    @ObservedObject var state: MyClass
    
    var body: some View {
        VStack {
            Text("TEXT: " + self.state.text)
            
            TextField("Enter Text", text: self.$state.text)
                .padding()
                .background(Color(UIColor.systemGray5))
                .cornerRadius(50)
        }
        .padding(.horizontal, 100)
    }
}

struct InputView_Previews: PreviewProvider {
    static var previews: some View {
        InputView(state: MyClass(text: "Test"))
    }
}
